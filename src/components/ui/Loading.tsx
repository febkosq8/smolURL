import { clsx } from "clsx";

const Loading = () => {
	return (
		<div
			className={clsx(
				"loading-message flex h-full w-full flex-col items-center justify-center gap-10 whitespace-pre-wrap text-center text-2xl dark:text-zinc-100"
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width="150px"
				height="30px"
				viewBox="0 0 100 10"
				preserveAspectRatio="xMidYMid"
			>
				<text
					x="25%"
					y="50%"
					textAnchor="middle"
					dy="0.38em"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					stroke="#2dd4bf"
					strokeWidth="0.6000000000000001"
					fontSize="24"
					fontFamily="arial"
				>
					smol
					<animate
						attributeName="stroke-dasharray"
						repeatCount="indefinite"
						calcMode="spline"
						dur="1.5s"
						values="0 100;100 100;0 100"
						keyTimes="0;0.5;1"
						keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
					></animate>
					<animate
						attributeName="stroke-dashoffset"
						repeatCount="indefinite"
						dur="1.5s"
						values="0;0;-100"
						keyTimes="0;0.5;1"
					></animate>
				</text>
				<text
					x="75%"
					y="50%"
					textAnchor="middle"
					dy="0.38em"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					stroke="#a5b4fc"
					strokeWidth="0.6000000000000001"
					fontSize="24"
					fontFamily="arial"
				>
					URL
					<animate
						attributeName="stroke-dasharray"
						repeatCount="indefinite"
						calcMode="spline"
						dur="1.5s"
						values="0 100;100 100;0 100"
						keyTimes="0;0.5;1"
						keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
					></animate>
					<animate
						attributeName="stroke-dashoffset"
						repeatCount="indefinite"
						dur="1.5s"
						values="0;0;-100"
						keyTimes="0;0.5;1"
					></animate>
				</text>
			</svg>
		</div>
	);
};

export default Loading;
