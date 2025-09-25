import type Task from "./Task"

export default interface TodoItemProps {
	task: Task
	onEdit?: (task: Task) => void
	onDelete?: (id: string) => void
	onToggle?: (id: string) => void
}
