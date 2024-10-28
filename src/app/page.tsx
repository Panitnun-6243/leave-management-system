'use client'

import TodoForm from '@/features/todo/components/TodoForm'
import TodoList from '@/features/todo/components/TodoList'
import { type Todo } from '@/features/todo/types'
import { useState } from 'react'

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
