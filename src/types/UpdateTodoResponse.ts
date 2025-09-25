import type Task from "./Task"

export default interface CreateTodoRequest {
	data: Task
	status: string
	message: string
}
