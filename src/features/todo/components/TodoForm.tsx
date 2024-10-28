import { type TodoFormProps } from '@/features/todo/types'
import { useState } from 'react'

export default function TodoForm({ onSubmit }: TodoFormProps) {
	const [input, setInput] = useState('')

	function handleChange(event: React.FormEvent<HTMLInputElement>) {
		setInput(event.currentTarget.value)
	}

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault()
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
