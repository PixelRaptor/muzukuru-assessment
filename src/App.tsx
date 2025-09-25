import { useState, useEffect } from "react"
import Topbar from "./components/Topbar.tsx"
import type Task from "./types/Task.ts"
import type ApiResponse from "./types/ApiResponse.ts"
import type CreateTodoResponse from "./types/CreateTodoResponse.ts"
import type UpdateTodoResponse from "./types/UpdateTodoResponse.ts"
import type DeleteTodoResponse from "./types/DeleteTodoResponse.ts"
import FilterPills from "./components/basic/FilterPills.tsx"
import AddToDoForm from "./components/primary/AddToDoForm.tsx"
import EditToDoForm from "./components/primary/EditToDoForm.tsx"
import ToDoList from "./components/primary/ToDoList.tsx"
import TodoListSkeleton from "./components/basic/TodoListSkeleton.tsx"
import ErrorCard from "./components/primary/ErrorCard.tsx"



function App() {
	const [selected, setSelected] = useState<string>("")
	const [addTask, setAddTask] = useState<boolean>(false)
	const [editTask, setEditTask] = useState<Task | null>(null)
	const [todos, setTodos] = useState<Task[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	const [operationLoading, setOperationLoading] = useState<{
		[key: string]: boolean
	}>({})

	// Simulate a GET request to fetch the initial To-Do list.
	const fetchTodos = async (outcome: boolean): Promise<ApiResponse> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const isSuccess = outcome // Simulate success/failure using outcome value
				if (isSuccess) {
					const todoData: Task[] = [
						{
							id: "1",
							title: "Update Website Homepage",
							description:
								"Refresh hero section images and adjust CTA button styling.",
							status: false,
							priority: "high",
						},
						{
							id: "2",
							title: "Prepare Client Proposal",
							description:
								"Draft proposal for upcoming web design project.",
							status: false,
							priority: "medium",
						},
						{
							id: "3",
							title: "Bug Fixes on Chat App",
							description:
								"Resolve message scroll-to-top pagination issue.",
							status: false,
							priority: "high",
						},
						{
							id: "4",
							title: "Research Animation Libraries",
							description:
								"Compare Framer Motion vs. GSAP for future projects.",
							status: true,
							priority: "low",
						},
						{
							id: "5",
							title: "Organize Project Files",
							description:
								"Clean up folders and rename assets for consistency.",
							status: true,
							priority: "low",
						},
					]

					resolve({
						data: todoData,
						status: "success",
					})
				} else {
					resolve({
						data: [] as Task[],
						status: "error",
						message: "Failed to fetch todos from server",
					})
				}
			}, 2000) // 2 second network delay
		})
	}

	// Simulate POST request on creating new task
	const createTodo = async (todoData: Task): Promise<CreateTodoResponse> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const isSuccess = Math.random() > 0.15 // simulate 85% success rate
				if (isSuccess) {
					const newTodo: Task = {
						...todoData,
					}
					resolve({
						data: newTodo,
						status: "success",
						message: "Todo created successfully",
					})
				} else {
					resolve({
						data: {} as Task,
						status: "error",
						message: "Failed to create todo",
					})
				}
			}, 800)
		})
	}

	// Simulate PUT request on updating task
	const updateTodo = async (
		id: string,
		updates: Partial<Task>
	): Promise<UpdateTodoResponse> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const isSuccess = Math.random() > 0.15 // simulate 85% success rate
				if (isSuccess) {
					const existingTodo = todos.find((todo) => todo.id === id)
					if (existingTodo) {
						const updatedTodo: Task = {
							...existingTodo,
							...updates,
						}
						resolve({
							data: updatedTodo,
							status: "success",
							message: "Todo updated successfully",
						})
					} else {
						resolve({
							data: {} as Task,
							status: "error",
							message: "Todo not found",
						})
					}
				} else {
					resolve({
						data: {} as Task,
						status: "error",
						message: "Failed to update todo",
					})
				}
			}, 100)
		})
	}

	// Simulate DELETE request on deleting task
	const deleteTodo = async (id: string): Promise<DeleteTodoResponse> => {
		return new Promise((resolve) => {
			setTimeout(() => {
				const isSuccess = Math.random() > 0.15 // simulate 85% success rate
				if (isSuccess) {
					resolve({
						data: { id },
						status: "success",
						message: "Todo deleted successfully",
					})
				} else {
					resolve({
						data: { id: -1 },
						status: "error",
						message: "Failed to delete todo",
					})
				}
			}, 500)
		})
	}

	// Handle creating new task
	const handleCreateTask = async (task: Task) => {
		setOperationLoading((prev) => ({ ...prev, create: true }))
		try {
			const response = await createTodo({
				...task,
			})
			if (response.status === "success") {
				setTodos((prev) => [...prev, response.data])
			} else {
				setError(response.message || "Failed to create todo")
			}
		} catch (err) {
			console.log(err)
			setError("Network error occurred")
		} finally {
			setOperationLoading((prev) => ({ ...prev, create: false }))
		}
	}

	// Handle toggling todo completion
	const handleToggleTask = async (id: string) => {
		const todo = todos.find((task) => task.id === id)
		if (!todo) return
		setOperationLoading((prev) => ({ ...prev, [`toggle_${id}`]: true }))
		try {
			const response = await updateTodo(id, {status: !todo.status,})

			if (response.status === "success") {
				setTodos((prev) =>
					prev.map((task) => (task.id === id ? response.data : task))
				)
			} else {
				setError(response.message || "Failed to update todo")
			}
		} catch (err) {
			console.log(err)
			setError("Network error occurred")
		} finally {
			setOperationLoading((prev) => ({
				...prev,
				[`toggle_${id}`]: false,
			}))
		}
	}

	// Handle deleting todo
	const handleDeleteTask = async (id: string) => {
		if (!confirm("Are you sure you want to delete this todo?")) return
		setOperationLoading((prev) => ({ ...prev, [`delete_${id}`]: true }))
		try {
			const response = await deleteTodo(id)
			if (response.status === "success") {
				setTodos((prev) => prev.filter((task) => task.id !== id))
			} else {
				setError(response.message || "Failed to delete todo")
			}
		} catch (err) {
			console.log(err)
			setError("Network error occurred")
		} finally {
			setOperationLoading((prev) => ({
				...prev,
				[`delete_${id}`]: false,
			}))
		}
	}

	// Handle editing existing task
	const handleEditTask = async (task:Task) => {try {
		const response:UpdateTodoResponse = await updateTodo(task.id, {
			...task,
		})

		if (response.status === "success") {
			setTodos((prev)=> prev.map((t):Task  => (t.id === task.id ? response.data : t))
			)
		} else {
			setError(response.message || "Failed to update todo")
		}
		} catch (err) {
			console.log(err)
			setError("Network error occurred")
		} finally {
			setOperationLoading((prev) => ({
				...prev,
				[`edit_${task.id}`]: false,
			}))
		}
		setEditTask(null)
	}
	
	// handle task filter
	const handleSelected = (value: string) => {
		setSelected(value)
	}

	// show create new task form
	const handleNewTask = () => {
		setAddTask(true)
	}

	// Load initial todos from a simulated GET request
	useEffect(() => {
		const loadTodos = async () => {
			try {
				setLoading(true)
				setError(null)
				const response = await fetchTodos(true) //Simulated GET request with boolean prop to simulate success and fail
				if (response.status === "success") {
					setTodos(response.data)
					setAddTask(false)
				} else {
					console.log("An unknown error occurred")
					setError(response.message || "An unknown error occurred")
				}
			} catch (err) {
				console.log(err)
				setError("Network error occurred")
			} finally {
				setLoading(false)
			}
		}
		loadTodos()
	}, [])

	return (
		<>
			<Topbar AddNewTask={handleNewTask} />
			<div className="w-full max-w-[926px] mx-auto flex py-[2rem]  flex-col">
				<FilterPills selected={selected} onSelected={handleSelected} />
				{!loading && (
					<ToDoList
						todoTasks={todos}
						onToggle={handleToggleTask}
						onDelete={handleDeleteTask}
						onEdit={(task: Task) => setEditTask(task)}
					/>
				)}
				{loading && <TodoListSkeleton />}
				{operationLoading.create && (
					<div className="animate-spin rounded-full h-5 w-5 mx-auto my-[2rem] border-2 border-orange_dark border-t-transparent"></div>
				)}
			</div>
			{addTask && (
				<AddToDoForm
					onSubmit={handleCreateTask}
					onClose={() => setAddTask(false)}
				/>
			)}
			{editTask && (
				<EditToDoForm
					task={editTask}
					onSubmit={handleEditTask}
					onClose={() => setEditTask(null)}
				/>
			)}
			{error && (
				<ErrorCard
					message={error}
					onClose={() => setError(null)}
				/>
			)}
			{(addTask || editTask || error) && (
				<div
					onClick={() => {
						setAddTask(false)
						setEditTask(null)
						setError(null)
					}}
					className="bg-black opacity-[0.3] absolute top-0 left-0  w-[100dvw] h-[100dvh] cursor-pointer"
				></div>
			)}
		</>
	)
}

export default App
