'use client'

import { useState } from 'react'
interface Todo {
	id: number
	title: string
}

interface TodoFormProps {
	onSubmit: (input: string) => void
}

interface TodoListProps {
	todos: Todo[]
}

function TodoForm({ onSubmit }: TodoFormProps) {
	const [input, setInput] = useState('')

	function handleChange(event: React.FormEvent<HTMLInputElement>) {
		setInput(event.currentTarget.value)
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault()
		onSubmit(input)
		setInput('')
	}

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="todo"></label>
			<input
				required
				type="text"
				id="todo"
				value={input}
				onChange={handleChange}
				className="border border-red-500"
			/>{' '}
			<button type="submit">submit</button>
		</form>
	)
}

function TodoList({ todos }: TodoListProps) {
	return (
		<ul>
			{todos.map((item) => (
				<li key={item.id}>Todo: {item.title}</li>
			))}
		</ul>
	)
}

export default function Home() {
	const [todos, setTodos] = useState<Todo[]>([])

	function handleSubmit(input: string) {
		const newTodo: Todo = {
			id: +new Date(),
			title: input,
		}
		setTodos([...todos, newTodo])
	}

	return (
		<>
			<header>Todo App</header>
			<TodoForm onSubmit={handleSubmit} />
			<br />
			<TodoList todos={todos} />
		</>
	)
}
