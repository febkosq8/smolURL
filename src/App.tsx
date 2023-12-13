import GoSmolURL from "@smolurl/pages/GoSmolURL";
import CreateSmolURL from "@smolurl/pages/CreateSmolURL";
import WrongPage from "@smolurl/pages/WrongPage";
import { Route, Routes } from "react-router-dom";
if (window.location.hash) {
	const element = document.querySelector(window.location.hash);
	if (element) {
		element.scrollIntoView();
	}
}
function App() {
	return (
		<div className="text-foreground bg-background">
			<Routes>
				<Route path="/create" element={<CreateSmolURL />} />
				<Route path="/:redirectUrl?" element={<GoSmolURL />} />
				<Route path="*" element={<WrongPage />} />
			</Routes>
		</div>
	);
}

export default App;
