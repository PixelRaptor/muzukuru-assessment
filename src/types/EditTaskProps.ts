import type Task from "./Task"

export default interface EditTaskProps {
	task: Task
	onSubmit?: (task:Task) => void
	onClose?: () => void
}
