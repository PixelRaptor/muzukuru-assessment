import { useState } from "react"
import type { FormEvent } from "react"
import type Task from "../../types/Task"
import type CreateTaskProps from "../../types/CreateTaskProps"

export default function CreateTask({ onSubmit,onClose }: CreateTaskProps) {
	const [title, setTitle] = useState<string>("")
	const [description, setDescription] = useState<string>("")
	const [status, setStatus] = useState<boolean>(false)
	const [priority, setPriority] = useState<string>("medium")
	const [error, setError] = useState<boolean>(false)

	// Handle task cancellation and clear form input fields
	const handleCancel = () => {
		onClose?.() // close add task form popup

		// clear form values
		setTitle("")
		setDescription("")
		setStatus(false)
		setPriority("medium")
	}

	// Handle new task submission and clear form input fields
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (title.length < 1) {
			setError(true)
			return
		}

		const formData: Task = {
			id: Date.now().toString(), // Generate a temporary id for the new task
			title,
			description,
			status,
			priority,
		}
		onSubmit?.(formData)
		onClose?.() // close add task form popup

		// clear form values
		setTitle("")
		setDescription("")
		setStatus(false)
		setPriority("medium")
	}

	return (
		<div className="bg-white rounded-[8px] px-[20px] py-[24px] max-w-[494px] w-full absolute transform-gpu top-1/2 and left-1/2 -translate-x-1/2 and -translate-y-1/2 z-10">
			<div className="font-bold text-[20px]">Create new task</div>
			<div className="h-[1px] border-b-[1px] border-[#ECECEC] my-[23px]"></div>
			<form onSubmit={handleSubmit}>
				<ul className="flex flex-col gap-[16px]">
					<li className="flex flex-col gap-2">
						<label
							htmlFor="title"
							className="text-sm font-medium text-gray_dark pl-[5px]"
						>
							Title
						</label>
						<input
							required
							id="title"
							name="title"
							type="text"
							value={title}
							placeholder="Task title"
							onChange={(e) => setTitle(e.target.value)}
							className="rounded-[4px] shadow-[inset_0_0px_0px_1px_rgba(0,0,0,0.1)] px-[13px] pt-[8px] pb-[10px] font-medium text-sm focus:shadow-[inset_0_0px_0px_1px_rgba(0,0,0,0.5)] outline-none"
						/>
					</li>
					<li className="flex flex-col gap-2">
						<label
							htmlFor="status"
							className="text-sm font-medium text-gray_dark pl-[5px]"
						>
							Status
						</label>
						<div className="relative">
							<select
								id="status"
								name="status"
								aria-label="Status"
								value={status ? "true" : "false"}
								onChange={(e) =>
									setStatus(e.target.value === "true")
								}
								className="rounded-[4px] shadow-[inset_0_0px_0px_1px_rgba(0,0,0,0.1)] w-full px-[13px] pt-[8px] pb-[10px] font-medium text-sm focus:shadow-[inset_0_0px_0px_1px_rgba(0,0,0,0.5)] outline-none appearance-none"
							>
								<option value="false">Pending</option>
								<option value="true">Completed</option>
							</select>
							<svg
								className="w-3 h-3 text-gray-500 pointer-events-none absolute right-2 top-[50%] -translate-y-1/2"
								viewBox="0 0 16 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14 6L8 12L2 6"
									stroke="black"
									strokeWidth="2"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</li>
					<li className="flex flex-col gap-2">
						<label
							htmlFor="description"
							className="text-sm font-medium text-gray_dark pl-[5px]"
						>
							Description
						</label>
						<textarea
							id="description"
							name="description"
							aria-label="Description"
							placeholder="Task description"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="rounded-[4px] shadow-[inset_0_0px_0px_1px_rgba(0,0,0,0.1)] px-[13px] pt-[8px] pb-[10px] font-medium text-sm focus:shadow-[inset_0_0px_0px_1px_rgba(0,0,0,0.5)] outline-none resize-none"
							rows={3} // fixed 3 lines
						/>
					</li>
					<li className="flex flex-col gap-2">
						<label
							htmlFor="description"
							className="text-sm font-medium text-gray_dark pl-[5px]"
						>
							Priority
						</label>
						<div className="grid grid-cols-3">
							<label className="flex items-center gap-2 text-sm font-medium text-gray_dark cursor-pointer">
								<input
									type="radio"
									name="priority"
									value="low"
									checked={priority === "low"}
									onChange={(e) =>
										setPriority(e.target.value as string)
									}
								/>
								Low
							</label>
							<label className="flex items-center gap-2 text-sm font-medium text-gray_dark cursor-pointer">
								<input
									type="radio"
									name="priority"
									value="medium"
									checked={priority === "medium"}
									onChange={(e) =>
										setPriority(e.target.value as string)
									}
								/>
								Medium
							</label>
							<label className="flex items-center gap-2 text-sm font-medium text-gray_dark cursor-pointer">
								<input
									type="radio"
									name="priority"
									value="high"
									checked={priority === "high"}
									onChange={(e) =>
										setPriority(e.target.value as string)
									}
								/>
								High
							</label>
						</div>
					</li>
					<li className="flex flex-row mx-auto h-[10px] w-full gap-[16px] relative">
						{error && (
							<div className="flex flex-col gap-2 text-[#ff3939] text-center absolute w-full top-0 float-left text-[10px] font-medium">
								Title for task can not be empty
							</div>
						)}
					</li>
					<li className="flex flex-row mx-auto gap-[16px] relative">
						<button
							onClick={handleCancel}
							type="button"
							className="px-[40px] pt-[8px] pb-[10px] text-sm font-[600] bg-gray_light text-gray_dark rounded-[22px] hover:bg-orange_dark hover:text-white flex flex-row gap-[5px] stroke-white"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="px-[40px] pt-[8px] pb-[10px] text-sm font-[600] bg-gray_dark text-white rounded-[22px] hover:bg-orange_dark flex flex-row gap-[5px] stroke-white"
						>
							Submit
						</button>
					</li>
				</ul>
			</form>
		</div>
	)
}
