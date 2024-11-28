import type React from "react";

export type InputLabelProps = {
	required?: boolean;
	children: React.ReactNode;
};

export const InputLabel = ({ children, required }: InputLabelProps) => {
	return (
		<div className="flex gap-[2px] items-start">
			<span className="h-5 shrink-0 font-bold text-base text-left">
				{children}
			</span>
			{required && (
				<div className="w-2 h-5 relative">
					<span className="absolute h-full text-base font-bold text-error top-0 left-0">
						*
					</span>
				</div>
			)}
		</div>
	);
};
