import React from "react";

export type ButtonProps = Omit<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	"className"
>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className="bg-brand hover:bg-brand-dark disabled:bg-brand-disabled rounded-sm px-4 py-2.5 text-sm font-bold text-white"
				{...props}
			>
				{children}
			</button>
		);
	},
);
