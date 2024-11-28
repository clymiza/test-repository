import type React from "react";

export type TooltipProps = { children: React.ReactNode; tooltip?: string };

export const Tooltip = ({ children, tooltip }: TooltipProps) => {
	return (
		<>
			{children}
			{tooltip && (
				<div className="relative h-0 w-full top-full z-50">
					<div className="flex shadow-md gap-2 border -top-1 border-border whitespace-nowrap rounded bg-white px-2 py-1 text-base absolute left-3/4 -translate-x-1/2 before:content-[''] before:absolute before:-top-1 before:-translate-x-1/2 before:left-1/3 before:bg-white before:rotate-[45deg] before:w-2 before:h-2 before:border-l before:border-t before:border-border">
						<span>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10 7.5V10.625M17.5 10C17.5 10.9849 17.306 11.9602 16.9291 12.8701C16.5522 13.7801 15.9997 14.6069 15.3033 15.3033C14.6069 15.9997 13.7801 16.5522 12.8701 16.9291C11.9602 17.306 10.9849 17.5 10 17.5C9.01509 17.5 8.03982 17.306 7.12987 16.9291C6.21993 16.5522 5.39314 15.9997 4.6967 15.3033C4.00026 14.6069 3.44781 13.7801 3.0709 12.8701C2.69399 11.9602 2.5 10.9849 2.5 10C2.5 8.01088 3.29018 6.10322 4.6967 4.6967C6.10322 3.29018 8.01088 2.5 10 2.5C11.9891 2.5 13.8968 3.29018 15.3033 4.6967C16.7098 6.10322 17.5 8.01088 17.5 10ZM10 13.125H10.0067V13.1317H10V13.125Z"
									stroke="#FF3D72"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
						{tooltip}
					</div>
				</div>
			)}
		</>
	);
};
