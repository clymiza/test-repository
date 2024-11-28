import { Tooltip } from "@/components/tooltip";
import clsx from "clsx";
import React from "react";

export type DatetimeProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"className"
> & { type: "date" | "time"; formatText: string; errorMessage?: string };

export const Datetime = React.forwardRef<HTMLInputElement, DatetimeProps>(
	({ type, formatText, errorMessage, ...props }, ref) => {
		return (
			<>
				<Tooltip tooltip={errorMessage}>
					<div
						className={clsx(
							errorMessage && "border-error",
							!errorMessage && "border-transparent",
							"w-fit border focus-within:border-focus flex py-2 px-4 gap-[10px] justify-center items-center flex-nowrap bg-gray rounded-sm relative",
						)}
					>
						<input
							{...props}
							type={type}
							ref={ref}
							className="opacity-0 absolute w-full z-10 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:w-full"
						/>
						<span className="text-lg whitespace-nowrap">{formatText}</span>
					</div>
				</Tooltip>
			</>
		);
	},
);
