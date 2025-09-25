import type Task from '../../types/Task'
import TodoItem from './TodoItem'
import type ToDoListProps from '../../types/ToDoListProps'

export default function ToDoList({ todoTasks, onToggle, onDelete, onEdit }: ToDoListProps) {
	const handleEdit = (task: Task) => {
		onEdit?.(task)
	}

	const handleDelete = (id: string) => {
		onDelete?.(id)
	}

	const handleToggle = (id: string) => {
		onToggle?.(id)
	}
	return (
		<ul className="mt-[42px] flex flex-col gap-[20px]">
			{todoTasks?.map((todo: Task) => (
				<TodoItem
					key={todo.id}
					task={todo}
					onToggle={handleToggle}
					onEdit={handleEdit}
					onDelete={handleDelete}
				/>
			))}
		</ul>
	)
}
