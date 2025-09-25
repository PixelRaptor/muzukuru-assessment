import React from 'react'
import type FilterPillProps from "../../types/FilterPillProps"

export default function FilterPills({ selected = "", onSelected }: FilterPillProps) {

	return (
		<ul className="flex flex-row gap-[12px] mx-auto">
			<li
				onClick={() => onSelected?.("" as string)}
				className={`flex flex-row gap-[6px] text-sm font-bold pt-[5px] pb-[7px] pl-[13px] pr-[16px] rounded-[22px] cursor-pointer ${
					selected === ""
						? "bg-gray_dark stroke-white text-white"
						: "bg-gray_light stroke-gray_dark text-gray_dark hover:bg-orange_dark hover:stroke-white hover:text-white"
				}`}
			>
				<svg
					className="w-[12px] h-[14px] my-auto"
					viewBox="0 0 12 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9.3213 4.0965H10.9258L10.124 5.52228C9.95183 5.82842 9.63373 6.01248 9.29396 6.01251H7.66701C7.68044 5.99264 7.69393 5.9721 7.70607 5.95099L8.49513 4.57892C8.66858 4.27744 8.98479 4.0965 9.3213 4.0965ZM6.77834 2.61115C6.95192 2.91519 6.95275 3.29107 6.78029 3.59552L6.00197 4.96759C5.99323 4.983 5.98539 4.99878 5.97755 5.01447L5.17384 3.59552C5.0231 3.3289 5.00508 3.00791 5.11916 2.72833L5.1758 2.61115L5.97658 1.2088L6.77834 2.61115Z"
						stroke="inherit"
						strokeWidth="1.5"
						strokeMiterlimit="10"
					/>
					<path
						d="M5.99605 9.03271L6.77339 10.4126C6.92319 10.6786 6.94147 10.9981 6.82808 11.2769L6.77144 11.394L5.97359 12.7935L5.16792 11.395C4.99213 11.0899 4.99176 10.7117 5.16597 10.4058L5.97261 8.98682L5.99605 9.03271ZM9.28804 7.99365H9.28902C9.62604 7.99456 9.94179 8.1774 10.1142 8.48096L10.9218 9.90381L9.31343 9.90674L9.18843 9.89893C8.89896 9.86046 8.63723 9.68801 8.48531 9.42236L7.70308 8.05322L7.66109 7.98877L9.28804 7.99365Z"
						stroke="inherit"
						strokeWidth="1.5"
						strokeMiterlimit="10"
					/>
					<path
						d="M3.4668 9.4205C3.29337 9.72323 2.97653 9.90538 2.63867 9.90488L1.0293 9.90195L1.83691 8.4791C2.00908 8.17568 2.32512 7.99257 2.66309 7.99179L4.22363 7.98886H4.22461C4.24632 7.98881 4.26773 7.98639 4.28906 7.98495L3.4668 9.4205ZM2.63672 4.09238C2.97649 4.09048 3.29584 4.27436 3.46973 4.57968L4.28711 6.0162C4.26722 6.01491 4.24679 6.01337 4.22656 6.01328L2.66016 6.00644C2.32385 6.00493 2.00923 5.82225 1.83691 5.52011L1.02832 4.10117L2.63672 4.09238Z"
						stroke="inherit"
						strokeWidth="1.5"
						strokeMiterlimit="10"
					/>
				</svg>
				<span>All tasks</span>
			</li>
			<li
				onClick={() => onSelected?.("pending" as string)}
				className={`flex flex-row gap-[6px] text-sm font-bold pt-[5px] pb-[7px] pl-[13px] pr-[16px] rounded-[22px] cursor-pointer ${
					selected === "pending"
						? "bg-gray_dark stroke-white text-white"
						: "bg-gray_light stroke-gray_dark text-gray_dark hover:bg-orange_dark hover:stroke-white hover:text-white"
				}`}
			>
				<svg
					className="w-[14px] h-[14px] my-auto"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12.9513 7C12.9513 10.3138 10.2651 13 6.95132 13C3.63752 13 0.951324 10.3138 0.951324 7C0.951324 3.6862 3.63752 1 6.95132 1C10.2651 1 12.9513 3.6862 12.9513 7Z"
						stroke="inherit"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<span>Pending</span>
			</li>
			<li
				onClick={() => onSelected?.("completed" as string)}
				className={`flex flex-row gap-[6px] text-sm font-bold pt-[5px] pb-[7px] pl-[13px] pr-[16px] rounded-[22px] cursor-pointer ${
					selected === "completed"
						? "bg-gray_dark stroke-white text-white"
						: "bg-gray_light stroke-gray_dark text-gray_dark hover:bg-orange_dark hover:stroke-white hover:text-white"
				}`}
			>
				<svg
					className="w-[14px] h-[14px] my-auto"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.55129 7.6L6.35129 9.4L9.35129 5.2M12.9513 7C12.9513 10.3138 10.2651 13 6.95129 13C3.63749 13 0.951294 10.3138 0.951294 7C0.951294 3.6862 3.63749 1 6.95129 1C10.2651 1 12.9513 3.6862 12.9513 7Z"
						stroke="inherit"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>

				<span>Completed</span>
			</li>
		</ul>
	)
}
