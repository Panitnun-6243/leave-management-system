import TodoItem from '@/features/todo/components/TodoItem'
import { type TodoListProps } from '@/features/todo/types'

export default function TodoList({ todos }: TodoListProps) {
	return (
		<ul>
			{todos.map((item) => (
				// {...item} -> title={item.title} id={item.id}
				<TodoItem key={item.id} {...item} />
			))}
		</ul>
	)
}
