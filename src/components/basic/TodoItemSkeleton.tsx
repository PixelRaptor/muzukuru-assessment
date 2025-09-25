import React from 'react'

export default function TodoItemSkeleton() {
	return (
			<li className="rounded-[40px] grid grid-cols-[17px_1fr_auto] overflow-hidden pl-[24px] pr-[24px] py-[5px] gap-[14px] animate-pulse bg-gray_light">
				<div className="bg-[#e2e5f1] rounded-[15px] w-[17px] h-[17px] my-auto" />
				<div className="flex gap-[0.7rem] my-[15px]">
					<div className="h-[20px] w-[190px] bg-[#e2e5f1] rounded"></div>
					<div className="h-[5px] w-[5px] bg-[#e2e5f1] rounded my-auto"></div>
				</div>
				<div className="flex flex-row gap-[20px] my-auto">
					<div className="h-[29px] w-[90px] bg-[#e2e5f1] rounded-[20px]"></div>
					<div className="h-[29px] w-[29px] bg-[#e2e5f1] rounded-[20px]"></div>
				</div>
			</li>
	)
}
