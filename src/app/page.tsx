'use client'

import { useState } from 'react'
interface Todo {
	id: number
	title: string
}

export default function Home() {
	const [todos, setTodos] = useState<Todo[]>([])
	const [input, setInput] = useState('')

	function handleChange(event: React.FormEvent<HTMLInputElement>) {
		setInput(event.currentTarget.value)
	}

	function handleSubmit(event: React.MouseEvent) {
		event.preventDefault()
		const newTodo: Todo = {
			id: +new Date(),
			title: input,
		}
		setTodos([...todos, newTodo])
		setInput('')
	}

	return (
		<>
			<header>Todo App</header>
			<form>
				<label htmlFor="todo"></label>
				<input
					type="text"
					id="todo"
					value={input}
					onChange={handleChange}
					required
					className="border border-red-500"
				/>{' '}
				<button onClick={handleSubmit}>submit</button>
			</form>

			<br />
			<ul>
				{todos.map((item) => (
					<li key={item.id}>Todo: {item.title}</li>
				))}
			</ul>
		</>
	)
}
