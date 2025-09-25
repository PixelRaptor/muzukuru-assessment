import type Task from "./Task"

export default interface CreateTaskProps {
	onSubmit?: (task:Task) => void
	onClose?: () => void
}
