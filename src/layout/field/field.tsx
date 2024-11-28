export type FieldProps = {
	children: React.ReactNode;
};

export const Field = ({ children }: FieldProps) => {
	return (
		<div className="flex flex-col gap-2 items-start self-stretch shrink-0 flex-nowrap relative">
			{children}
		</div>
	);
};
