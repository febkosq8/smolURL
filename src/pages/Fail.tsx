export default function Fail() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[theme(spacing.fit-screen)]">
			<div className="text-5xl font-bold text-center text-slate-600 dark:text-slate-100">Something failed</div>
			<div className="text-2xl font-bold text-center text-slate-600 dark:text-slate-100">
				Check console for error stack
			</div>
		</div>
	);
}
