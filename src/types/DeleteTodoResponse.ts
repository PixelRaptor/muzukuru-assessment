export default interface DeleteTodoResponse {
	data: { id: number | string }
	status: "success" | "error"
	message?: string
}