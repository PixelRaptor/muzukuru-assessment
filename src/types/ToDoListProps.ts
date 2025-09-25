import type Task from "./Task"

export default interface ToDoItemProps {
	todoTasks?: Task[]
	onToggle?: (id: string) => void
	onEdit?: (task: Task) => void
	onDelete?: (id: string) => void
}
