import { clsx } from "clsx";

const Input = ({ className, ...rest }) => {
	return (
		<input
			{...rest}
			autoComplete="off"
			className={clsx(
				className,
				"h-10",
				"placeholder:gray-800 rounded border border-border bg-input pl-5 text-foreground",
				"focus:border-transparent focus:outline-none focus:ring-2 focus:ring-ring",
				"disabled:cursor-not-allowed disabled:border-muted",
				"whitespace-pre-wrap"
			)}
		/>
	);
};

export default Input;
