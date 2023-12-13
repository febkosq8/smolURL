import { Switch as SwitchBase } from "@headlessui/react";
import { cva } from "class-variance-authority";

const Switch = ({ checked = false, onChange, disabled, variant = "primary", children }) => {
	return (
		<SwitchBase
			checked={checked}
			disabled={disabled}
			onChange={onChange}
			className={SwitchVariants({ variant, checked })}
		>
			{children(checked)}
		</SwitchBase>
	);
};
const SwitchVariants = cva("relative inline-flex h-6 w-11 items-center rounded-full", {
	variants: {
		variant: {
			danger: "",
			success: "",
			primary: "",
		},
		checked: {
			true: "",
			false: "bg-gray-400 dark:bg-gray-200",
		},
	},
	compoundVariants: [
		{
			variant: "danger",
			checked: true,
			className: "bg-red-600",
		},
		{
			variant: "primary",
			checked: true,
			className: "bg-blue-600",
		},
		{
			variant: "success",
			checked: true,
			className: "bg-green-600",
		},
	],
});
export { Switch, SwitchVariants };
