import React from "react";

export type CheckboxProps = Omit<
	React.InputHTMLAttributes<HTMLInputElement>,
	"className"
> & { label: string };

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
	({ children, label, ...props }, ref) => {
		return (
			<div className="flex w-fit gap-2 items-center flex-nowrap relative">
				<input
					{...props}
					ref={ref}
					type="checkbox"
					className="peer opacity-0 absolute w-full h-full z-10 cursor-pointer"
				/>
				<div className="peer-checked:before:content-[''] peer-checked:before:absolute peer-checked:before:top-[1px] peer-checked:before:left-2 peer-checked:before:rotate-[35deg] peer-checked:before:w-2 peer-checked:before:h-4 peer-checked:before:border-r-2 peer-checked:before:border-b-2 peer-checked:before:border-brand w-6 h-6 shrink-0 bg-white rounded-sm border-solid border border-border" />
				<span className="shrink-0 basis-auto text-base text-left">{label}</span>
			</div>
		);
	},
);
