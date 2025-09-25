import {useState} from "react"
import { motion } from "motion/react"
import type TodoItemProps from "../../types/TodoItemProps.ts"
import type Task from "../../types/Task.ts"

export default function TodoItem({ task, onToggle,onEdit, onDelete }: TodoItemProps) {
	const [showActions, setShowActions] = useState<boolean>(false)
	const [showDescription, setShowDescription] = useState<boolean>(false)

	// toggle more task action
	const handleShowAction = () => {
		setShowActions(!showActions)
	}

	// toggle task description
	const handleShowDescription = () => {
		setShowDescription(!showDescription)
	}

	// handle edit task action
	const handleEdit = (task: Task) => {
		onEdit?.(task)
	}

	// handle delect task action
	const handleDelete = (id: string) => {
		onDelete?.(id)
	}

	// handle task status 
	const handleToggleTask = (id: string) => {
		onToggle?.(id)
	}

	return (
		<>
			<li
				onMouseLeave={() => setShowActions(false)}
				className="bg-white shadow-[inset_0_0px_0px_1px_rgba(0,0,0,0.1)] rounded-[40px] grid grid-cols-[17px_1fr_auto] overflow-hidden pl-[24px] pr-[5px] py-[5px] gap-[14px]"
			>
				<div
					onClick={() => handleToggleTask(task?.id)}
					className="stroke-gray_dark hover:stroke-orange_dark my-auto active:opacity-[0.7] cursor-pointer transition-transform duration-75"
				>
					<svg
						className="w-[17px] h-[17px]"
						viewBox="0 0 17 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M16 8.5C16 12.6423 12.6423 16 8.5 16C4.35775 16 1 12.6423 1 8.5C1 4.35775 4.35775 1 8.5 1C12.6423 1 16 4.35775 16 8.5Z"
							stroke="inherit"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							className={`${task?.status ? "visible" : "hidden"}`}
							d="M5.5 9.25L7.75 11.5L11.5 6.25"
							stroke="inherit"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
				<div className="flex flex-col my-[15px]">
					<div
						onClick={handleShowDescription}
						className="flex flex-row gap-[0.5rem] my-auto cursor-pointer text-gray_dark hover:underline underline-offset-2 fill-[#686868]"
					>
						<div className="text-sm font-bold">{task?.title}</div>
						<svg
							className={`h-[12px] my-auto transform-gpu transition-transform duration-300 ease-in-out  ${
								showDescription ? "rotate-[180deg]" : ""
							} `}
							viewBox="0 0 15 16"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M13.7888 6.51932C13.924 6.38409 14 6.20079 14 6.00966C14 5.81854 13.924 5.63523 13.7888 5.5H1.21124C1.07597 5.63523 1 5.81854 1 6.00966C1 6.20079 1.07597 6.38409 1.21124 6.51932L6.98958 12.2891C7.12501 12.4241 7.30859 12.5 7.5 12.5C7.69141 12.5 7.87499 12.4241 8.01042 12.2891L13.7888 6.51932Z"
								fill="inherit"
							/>
						</svg>
					</div>
					{showDescription && (
						<motion.div
							initial={{ opacity: 0, y: -5 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -5 }}
							transition={{ duration: 0.2, ease: "easeInOut" }}
							className="text-sm font-medium line-clamp-1 text-[#696969] "
						>
							{task?.description}
						</motion.div>
					)}
				</div>
				<div className="my-auto h-[100%] flex">
					{!showActions && (
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="flex flex-row my-auto gap-[20px] pr-[19px]"
						>
							<div className="flex flex-row gap-[12px]">
								<div
									className={`text-sm font-semibold px-[20px] pt-[3px] pb-[6px] rounded-[20px] 
									${task?.priority === "low" ? "bg-[#f5fff5] text-[#47CB49]" : ""} 
									${task?.priority === "medium" ? "bg-[#fffae9] text-[#FFC300]" : ""} 
									${task?.priority === "high" ? "bg-[#ffeaea] text-[#FF0000]" : ""}
								`}
								>
									{task?.priority}
								</div>
							</div>
							<div
								onClick={handleShowAction}
								className="flex bg-white fill-gray_dark stroke-gray_dark w-[28px] h-[28px] cursor-pointer rounded-[20px] hover:bg-orange_dark hover:stroke-white hover:fill-white active:opacity-[0.7]"
							>
								<svg
									className="w-[24px] h-[24px] m-auto"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12ZM5 12C5.26522 12 5.51957 11.8946 5.70711 11.7071C5.89464 11.5196 6 11.2652 6 11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12ZM19 12C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10C18.7348 10 18.4804 10.1054 18.2929 10.2929C18.1054 10.4804 18 10.7348 18 11C18 11.2652 18.1054 11.5196 18.2929 11.7071C18.4804 11.8946 18.7348 12 19 12Z"
										fill="inherit"
										stroke="inherit"
										strokeWidth="1.5"
										strokeMiterlimit="10"
									/>
								</svg>
							</div>
						</motion.div>
					)}
					{showActions && (
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="flex flex-row gap-[20px]  h-[100%] rounded-[50px] bg-[#F5F5F5] pr-[19px] pl-[11px]"
						>
							<div className="flex flex-row gap-[12px] h-[28px] my-auto">
								<div
									onClick={() => handleEdit(task)}
									className="h-[28px] w-[28px] flex rounded-[20px] fill-black bg-white hover:bg-orange_dark hover:fill-white cursor-pointer"
								>
									<svg
										className="w-[14px] h-[14px] m-auto"
										viewBox="0 0 14 14"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.72233 12.3333C2.4015 12.3333 2.12694 12.2193 1.89866 11.9913C1.67039 11.7634 1.55605 11.4889 1.55566 11.1681V3.01166C1.55566 2.69122 1.67 2.41701 1.89866 2.18902C2.12733 1.96103 2.40189 1.84684 2.72233 1.84645H6.52858C6.72302 1.84645 6.86886 1.90723 6.96608 2.0288C7.0633 2.15037 7.11191 2.28379 7.11191 2.42905C7.11191 2.57431 7.06097 2.70793 6.95908 2.82988C6.85719 2.95184 6.70883 3.01243 6.514 3.01166H2.72233V11.1681H10.889V7.36663C10.889 7.17243 10.9499 7.02678 11.0716 6.92968C11.1933 6.83257 11.3269 6.78402 11.4723 6.78402C11.6178 6.78402 11.7516 6.83257 11.8737 6.92968C11.9958 7.02678 12.0564 7.17243 12.0557 7.36663V11.1681C12.0557 11.4886 11.9415 11.763 11.7132 11.9913C11.485 12.2197 11.2102 12.3337 10.889 12.3333H2.72233ZM5.05566 8.2551V6.84228C5.05566 6.68692 5.08483 6.53875 5.14316 6.39776C5.2015 6.25677 5.28414 6.13306 5.39108 6.02664L10.4077 1.01623C10.5244 0.899714 10.6557 0.812323 10.8015 0.754062C10.9473 0.695802 11.0932 0.666672 11.239 0.666672C11.3946 0.666672 11.5429 0.695802 11.6841 0.754062C11.8252 0.812323 11.954 0.899714 12.0702 1.01623L12.8869 1.84645C12.9939 1.96297 13.0765 2.09172 13.1348 2.23271C13.1932 2.3737 13.2223 2.51683 13.2223 2.66209C13.2223 2.80736 13.1957 2.95068 13.1424 3.09206C13.0891 3.23343 13.004 3.362 12.8869 3.47774L7.87025 8.48814C7.7633 8.59495 7.63944 8.68001 7.49866 8.74332C7.35789 8.80663 7.20952 8.83809 7.05358 8.83771H5.639C5.47372 8.83771 5.33527 8.78178 5.22366 8.66992C5.11205 8.55806 5.05605 8.41978 5.05566 8.2551ZM6.22233 7.6725H7.039L10.4223 4.29339L10.014 3.88556L9.59108 3.47774L6.22233 6.84228V7.6725Z"
											fill="inherit"
										/>
									</svg>
								</div>
								<div
									onClick={() => handleDelete(task?.id)}
									className="h-[28px] w-[28px] flex rounded-[20px] fill-black bg-white hover:bg-orange_dark hover:fill-white cursor-pointer"
								>
									<svg
										className="w-[14px] h-[14px] m-auto"
										viewBox="0 0 14 14"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M4.08325 12.25C3.76242 12.25 3.48786 12.1359 3.25959 11.9076C3.03131 11.6793 2.91698 11.4046 2.91659 11.0833V3.5C2.75131 3.5 2.61287 3.444 2.50125 3.332C2.38964 3.22 2.33364 3.08156 2.33325 2.91667C2.33287 2.75178 2.38887 2.61333 2.50125 2.50133C2.61364 2.38933 2.75209 2.33333 2.91659 2.33333H5.24992C5.24992 2.16806 5.30592 2.02961 5.41792 1.918C5.52992 1.80639 5.66837 1.75039 5.83325 1.75H8.16659C8.33187 1.75 8.4705 1.806 8.5825 1.918C8.6945 2.03 8.75031 2.16844 8.74992 2.33333H11.0833C11.2485 2.33333 11.3872 2.38933 11.4992 2.50133C11.6112 2.61333 11.667 2.75178 11.6666 2.91667C11.6662 3.08156 11.6102 3.22019 11.4986 3.33258C11.387 3.44497 11.2485 3.50078 11.0833 3.5V11.0833C11.0833 11.4042 10.9691 11.6789 10.7408 11.9076C10.5126 12.1362 10.2378 12.2504 9.91659 12.25H4.08325ZM9.91659 3.5H4.08325V11.0833H9.91659V3.5ZM5.83325 9.91667C5.99853 9.91667 6.13717 9.86067 6.24917 9.74867C6.36117 9.63667 6.41698 9.49822 6.41659 9.33333V5.25C6.41659 5.08472 6.36059 4.94628 6.24859 4.83467C6.13659 4.72306 5.99814 4.66706 5.83325 4.66667C5.66837 4.66628 5.52992 4.72228 5.41792 4.83467C5.30592 4.94706 5.24992 5.0855 5.24992 5.25V9.33333C5.24992 9.49861 5.30592 9.63725 5.41792 9.74925C5.52992 9.86125 5.66837 9.91706 5.83325 9.91667ZM8.16659 9.91667C8.33187 9.91667 8.4705 9.86067 8.5825 9.74867C8.6945 9.63667 8.75031 9.49822 8.74992 9.33333V5.25C8.74992 5.08472 8.69392 4.94628 8.58192 4.83467C8.46992 4.72306 8.33148 4.66706 8.16659 4.66667C8.0017 4.66628 7.86325 4.72228 7.75125 4.83467C7.63925 4.94706 7.58325 5.0855 7.58325 5.25V9.33333C7.58325 9.49861 7.63925 9.63725 7.75125 9.74925C7.86325 9.86125 8.0017 9.91706 8.16659 9.91667Z"
											fill="inherit"
										/>
									</svg>
								</div>
							</div>
							<div
								onClick={handleShowAction}
								className="flex bg-white fill-gray_dark stroke-gray_dark w-[28px] h-[28px] my-auto cursor-pointer rounded-[20px] hover:bg-orange_dark hover:stroke-white hover:fill-white active:opacity-[0.7]"
							>
								<svg
									className="w-[24px] h-[24px] m-auto"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 12C12.2652 12 12.5196 11.8946 12.7071 11.7071C12.8946 11.5196 13 11.2652 13 11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10C11.7348 10 11.4804 10.1054 11.2929 10.2929C11.1054 10.4804 11 10.7348 11 11C11 11.2652 11.1054 11.5196 11.2929 11.7071C11.4804 11.8946 11.7348 12 12 12ZM5 12C5.26522 12 5.51957 11.8946 5.70711 11.7071C5.89464 11.5196 6 11.2652 6 11C6 10.7348 5.89464 10.4804 5.70711 10.2929C5.51957 10.1054 5.26522 10 5 10C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12ZM19 12C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10C18.7348 10 18.4804 10.1054 18.2929 10.2929C18.1054 10.4804 18 10.7348 18 11C18 11.2652 18.1054 11.5196 18.2929 11.7071C18.4804 11.8946 18.7348 12 19 12Z"
										fill="inherit"
										stroke="inherit"
										strokeWidth="1.5"
										strokeMiterlimit="10"
									/>
								</svg>
							</div>
						</motion.div>
					)}
				</div>
			</li>
		</>
	)
}
