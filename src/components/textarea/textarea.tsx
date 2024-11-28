import clsx from "clsx";
import React from "react";

export type TextareaProps = Omit<
	React.TextareaHTMLAttributes<HTMLTextAreaElement>,
	"className"
>;
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ disabled, ...props }, ref) => {
		return (
			<div className="flex h-28 self-stretch">
				<textarea
					ref={ref}
					{...props}
					disabled={disabled}
					className={clsx(
						disabled && "opacity-40",
						"px-4 py-2 w-full text-base text-wrap h-108px shrink-0 bg-white border-border border rounded-sm",
					)}
				/>
			</div>
		);
	},
);
