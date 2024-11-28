export const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="overflow-auto flex max-w-full w-full md:w-[608px] py-6 px-8 flex-col gap-6 items-center flex-nowrap bg-white rounded-sm">
			{children}
		</div>
	);
};
