import { Tooltip } from "@/components/tooltip";
import clsx from "clsx";
import React from "react";

export type InputProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"className"
> & { errorMessage?: string };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ errorMessage, disabled, ...props }, ref) => {
		return (
			<Tooltip tooltip={errorMessage}>
				<input
					ref={ref}
					{...props}
					className={clsx(
						errorMessage && "border-error",
						!errorMessage && "border-border",
						disabled && "opacity-40",
						"outline-none disabled:text-placeholder disabled:bg-disabled focus-visible:border-focus focus:border-focus active:border-focus border placeholder:text-placeholder text-base flex py-2 px-4 gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-white rounded-sm relative",
					)}
				/>
			</Tooltip>
		);
	},
);
