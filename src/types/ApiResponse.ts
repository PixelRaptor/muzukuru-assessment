import type Task from "./Task"

export default interface ApiResponse {
	data: Task[]
	status: string
	message?: string
}
