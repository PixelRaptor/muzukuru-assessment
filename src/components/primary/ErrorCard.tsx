import type ErrorCardProps from '../../types/ErrorCardProps'

export default function ErrorCard({onClose,message}:ErrorCardProps) {
	const handleClose = () => {
		onClose?.()
	}
	return (
		<div className="bg-white rounded-[8px] pt-[20px] pb-[30px] py-[24px] max-w-[494px] w-full absolute transform-gpu top-1/2 and left-1/2 -translate-x-1/2 and -translate-y-1/2 z-10">
			<div className="font-bold text-[20px] text-center">Alert</div>
			<div className="mx-auto my-[20px] w-[50px]">
				<svg
					className="w-[50px]"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_34_478)">
						<path
							d="M49.9999 99.6581C77.3503 99.6581 99.658 77.4359 99.658 50C99.658 22.5641 77.3503 0.341858 49.9999 0.341858C22.6495 0.341858 0.341797 22.6495 0.341797 50C0.341797 77.3504 22.6495 99.6581 49.9999 99.6581ZM49.9999 7.35041C73.5042 7.35041 92.6495 26.4957 92.6495 50C92.6495 73.5043 73.5042 92.6496 49.9999 92.6496C26.4956 92.6496 7.35034 73.5043 7.35034 50C7.35034 26.4957 26.4956 7.35041 49.9999 7.35041Z"
							fill="#4A4A4A"
						/>
						<path
							d="M31.3674 68.1196C32.0512 68.8034 32.9059 69.1453 33.8461 69.1453C34.7862 69.1453 35.6409 68.8034 36.3247 68.1196L49.9999 54.4444L63.6751 68.1196C64.3589 68.8034 65.2136 69.1453 66.1538 69.1453C67.0939 69.1453 67.9486 68.8034 68.6324 68.1196C69.9999 66.7521 69.9999 64.5299 68.6324 63.1624L54.9572 49.4872L68.6324 35.8119C69.9999 34.4444 69.9999 32.2222 68.6324 30.8547C67.2649 29.4872 65.0427 29.4872 63.6751 30.8547L49.9999 44.5299L36.3247 30.8547C34.9572 29.4872 32.735 29.4872 31.3674 30.8547C29.9999 32.2222 29.9999 34.4444 31.3674 35.8119L45.0427 49.4872L31.3674 63.1624C29.9999 64.5299 29.9999 66.7521 31.3674 68.1196Z"
							fill="#EA5E5E"
						/>
					</g>
				</svg>
			</div>

			<ul className="flex flex-col gap-[16px]">
				<li className="flex flex-col gap-2">
					<div className="text-sm font-medium text-gray_dark pl-[5px] text-center">
						{message}
					</div>
				</li>
				<li className="flex flex-row mx-auto mt-[0.5rem] gap-[16px] relative">
					<button
						onClick={handleClose}
						type="button"
						className="px-[40px] pt-[8px] pb-[10px] text-sm font-[600] bg-gray_light text-gray_dark rounded-[22px] hover:bg-orange_dark hover:text-white flex flex-row gap-[5px] stroke-white"
					>
						Close
					</button>
				</li>
			</ul>
		</div>
	)
}
