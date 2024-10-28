import { type Todo } from '@/features/todo/types'

export default function TodoItem({ title }: Todo) {
	return <li>Todo: {title}</li>
}
