import type Task from "./Task"

export default interface CreateTodoResponse {
	data: Task
	status: string
	message: string
}
