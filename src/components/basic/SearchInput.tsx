import React, { useState } from "react"
import type { KeyboardEvent, ChangeEvent } from "react"
import type SearchInputProps from "../../types/SearchInputProps"

const SearchInput = ({
	placeholder = "Search...",
	value = "",
	onChange,
	onSearch,
	onAddNewTask,
}: SearchInputProps) => {
	const [searchValue, setSearchValue] = useState<string>(value)

	// Handle search input value and run search on every change
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		setSearchValue(newValue)
		onChange?.(newValue)
		onSearch?.(newValue)
	}

	// Create a new task when ENTER key is clicked
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onAddNewTask?.(searchValue)
		}
	}

	// Create a new task when New Task button is clicked
	const handleAddNewTask = () => {
		onAddNewTask?.(searchValue)
	}

	return (
		<div className="flex items-center bg-none py-[2px] pl-[0.9rem] pr-[2px] w-full">
			<svg
				className="w-[19px] h-[19px]"
				viewBox="0 0 19 19"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.625 16.625L13.4583 13.4583M15.0417 8.70833C15.0417 10.388 14.3744 11.9989 13.1867 13.1867C11.9989 14.3744 10.388 15.0417 8.70833 15.0417C7.02863 15.0417 5.41772 14.3744 4.22999 13.1867C3.04226 11.9989 2.375 10.388 2.375 8.70833C2.375 7.02863 3.04226 5.41772 4.22999 4.22999C5.41772 3.04226 7.02863 2.375 8.70833 2.375C10.388 2.375 11.9989 3.04226 13.1867 4.22999C14.3744 5.41772 15.0417 7.02863 15.0417 8.70833Z"
					stroke="#686868"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<input
				type="text"
				className="flex-1 font-medium p-2 text-sm outline-none bg-transparent"
				placeholder={placeholder}
				value={searchValue}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			/>
			<button
				type="button"
				className="pl-[14px] pr-[18px] pt-[8px] pb-[10px] text-sm font-[600] bg-gray_dark text-white rounded-[22px] hover:bg-orange_dark flex flex-row gap-[5px] stroke-white"
				onClick={handleAddNewTask}
			>
				<span>
					<svg
						width="19"
						height="19"
						viewBox="0 0 19 19"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.75 9.5H14.25M9.5 14.25V4.75"
							stroke="inherit"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
				<span>New Task</span>
			</button>
		</div>
	)
}

export default SearchInput
