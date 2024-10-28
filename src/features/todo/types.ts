export interface Todo {
	id: number
	title: string
}

export interface TodoFormProps {
	onSubmit: (input: string) => void
}

export interface TodoListProps {
	todos: Todo[]
}
