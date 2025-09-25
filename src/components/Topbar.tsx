import { useState } from "react"
import SearchInput from "./basic/SearchInput"
import type TopBarProps from "../types/TopbarProps"

export default function Topbar({ AddNewTask, searchTasks }:TopBarProps) {
	const [query, setQuery] = useState("")

	// 
	const handleSearch = (value: string) => {
		searchTasks?.(value)
	}

	//
	const handleAddNewTask = (value: string) => {
		AddNewTask?.(value)
	}

	return (
		<div className="bg-white sticky top-0">
			<div className="flex flex-row justify-between w-full max-w-[1364px] mx-auto px-[32px] py-[34px]">
				<div className="w-[100px] flex">
					<a className="stroke-gray_dark hover:stroke-orange_dark cursor-pointer">
						<svg
							className="h-[42px] w-[42px] m-auto"
							viewBox="0 0 35 41"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M27.2674 11.5197H32.8103L30.0486 16.4308C29.4581 17.4809 28.3641 18.1201 27.1883 18.1202H21.1326C21.5307 17.9186 21.8771 17.6037 22.116 17.1886L24.4217 13.1808C25.0165 12.1469 26.103 11.5197 27.2674 11.5197ZM20.2781 7.43469C20.8737 8.47686 20.8759 9.76503 20.284 10.8087L18.0125 14.8136C17.7875 15.2105 17.6892 15.6471 17.7039 16.0753L14.7224 10.8077C14.1317 9.76376 14.1343 8.47772 14.7293 7.43665L17.5037 2.57922L20.2781 7.43469Z"
								stroke="inherit"
								strokeWidth="2.5"
								strokeMiterlimit="10"
							/>
							<path
								d="M17.6918 24.934C17.6775 25.3593 17.7738 25.7935 17.9965 26.1888L20.2661 30.2162C20.8529 31.2575 20.8507 32.5392 20.2592 33.5775L17.4985 38.4252L14.7075 33.5844C14.1045 32.5388 14.1006 31.2433 14.6977 30.1947L17.6918 24.934ZM27.1733 22.8988H27.1743C28.3415 22.9016 29.4288 23.5352 30.02 24.5765L32.8022 29.4808L27.2465 29.4906C26.1504 29.4926 25.1236 28.9385 24.5092 28.0121L24.392 27.8217L22.1069 23.8246L21.977 23.6224C21.7478 23.301 21.4494 23.0509 21.1137 22.8822L27.1733 22.8988Z"
								stroke="inherit"
								strokeWidth="2.5"
								strokeMiterlimit="10"
							/>
							<path
								d="M10.6091 27.8176C10.0143 28.8559 8.92453 29.4864 7.75557 29.4846L2.19698 29.4749L4.97823 24.5715C5.56896 23.5299 6.65784 22.896 7.82784 22.8938L12.3845 22.886C12.8515 22.8851 13.2824 22.7467 13.6462 22.5139L10.6091 27.8176ZM7.74873 11.509C8.9243 11.5026 10.0216 12.1362 10.6179 13.1829L13.6394 18.4885C13.2791 18.2596 12.8532 18.1236 12.3913 18.1213H12.3903L7.81514 18.0999C6.65083 18.0946 5.56788 17.4629 4.97725 16.426L2.19405 11.5393L7.74873 11.509Z"
								stroke="inherit"
								strokeWidth="2.5"
								strokeMiterlimit="10"
							/>
						</svg>
					</a>
				</div>
				<div className="w-[550px] h-[42px] mx-[32px] rounded-[30px] md:bg-gray_light">
					<SearchInput
						placeholder="Search tasks..."
						value={query}
						onChange={setQuery}
						onSearch={handleSearch}
						onAddNewTask={handleAddNewTask}
					/>
				</div>
				<div className="flex flex-row gap-[1rem]">
					<div className="stroke-gray_dark hover:stroke-orange_dark cursor-pointer">
						<svg
							width="41"
							height="41"
							viewBox="0 0 41 41"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="20.5"
								cy="20.5"
								r="20.5"
								fill="white"
								stroke="none"
							/>
							<path
								d="M21.0858 9.95712V11.9095"
								stroke="inherit"
								strokeWidth="1.8"
								strokeLinejoin="round"
							/>
							<path
								d="M21.0858 11.9095C17.8546 11.9095 15.2286 14.5355 15.2286 17.7667V23.6238C14.2524 23.6238 13.2762 24.6 13.2762 25.5762H21.0858M21.0858 11.9095C24.317 11.9095 26.9429 14.5355 26.9429 17.7667V23.6238C27.9191 23.6238 28.8953 24.6 28.8953 25.5762H21.0858"
								stroke="inherit"
								strokeWidth="1.8"
								strokeLinejoin="round"
							/>
							<path
								d="M19.1334 26.5524C19.1334 27.6262 20.012 28.5047 21.0858 28.5047C22.1596 28.5047 23.0382 27.6262 23.0382 26.5524"
								stroke="inherit"
								strokeWidth="1.8"
								strokeLinecap="square"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className="stroke-gray_dark fill-gray_light hover:stroke-orange_dark cursor-pointer">
						<svg
							className="w-[42px] h-[42px]"
							viewBox="0 0 41 41"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								width="41"
								height="41"
								rx="20.5"
								fill="inherit"
								stroke="none"
							/>
							<path
								d="M21.012 19.5588C21.948 19.5588 22.8457 19.187 23.5076 18.5251C24.1695 17.8632 24.5414 16.9655 24.5414 16.0294C24.5414 15.0934 24.1695 14.1956 23.5076 13.5337C22.8457 12.8718 21.948 12.5 21.012 12.5C20.0759 12.5 19.1782 12.8718 18.5163 13.5337C17.8544 14.1956 17.4825 15.0934 17.4825 16.0294C17.4825 16.9655 17.8544 17.8632 18.5163 18.5251C19.1782 19.187 20.0759 19.5588 21.012 19.5588ZM27.7231 27.5C27.267 26.0786 26.3713 24.8386 25.1652 23.959C23.9591 23.0793 22.5048 22.6053 21.012 22.6053C19.5191 22.6053 18.0648 23.0793 16.8587 23.959C15.6526 24.8386 14.7569 26.0786 14.3008 27.5H27.7231Z"
								stroke="inherit"
								strokeWidth="1.8"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}
