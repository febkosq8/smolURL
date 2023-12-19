import ThemeSwitcher from "@smolurl/components/ui/ThemeSwitcher";
import Menu from "@smolurl/components/ui/Menu";
const currPath = window.location.pathname;
export default function Header() {
	return (
		<div className="flex text-2xl items-center w-full justify-between px-16 h-16 bg-background border-b-2 sticky top-0">
			<a href="/">
				<svg xmlns="http://www.w3.org/2000/svg" width="160" height="40" viewBox="0 0 140 40">
					<text
						className="fill-primary"
						x="5"
						y="30"
						fontFamily="Lato, sans-serif"
						fontStyle="italic"
						fontSize="32"
						fontWeight="bold"
						strokeWidth="1"
					>
						smolURL
					</text>
				</svg>
			</a>
			<div className="flex items-center gap-4">
				<Menu active={currPath === "/"} href="/" buttonContent="Home" />
				<Menu active={currPath === "/create"} href="/create" buttonContent="Create" />
				<ThemeSwitcher />
			</div>
		</div>
	);
}
