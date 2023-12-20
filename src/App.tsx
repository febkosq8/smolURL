import Loading from "@smolurl/components/ui/Loading";
import CreateSmolURL from "@smolurl/pages/CreateSmolURL";
import Fail from "@smolurl/pages/Fail";
import Header from "@smolurl/components/smolurl/Header";
import GoSmolURL from "@smolurl/pages/GoSmolURL";
import WrongPage from "@smolurl/pages/WrongPage";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
if (window.location.hash) {
	const element = document.querySelector(window.location.hash);
	if (element) {
		element.scrollIntoView();
	}
}
function App() {
	const { reset } = useQueryErrorResetBoundary();
	return (
		<div className="text-foreground bg-background">
			<Header />
			<div className="flex flex-col items-center justify-center min-h-[theme(spacing.fit-screen)]">
				<ErrorBoundary onReset={reset} FallbackComponent={Fail}>
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path="/create" element={<CreateSmolURL />} />
							<Route path="/:redirectUrl?" element={<GoSmolURL />} />
							<Route path="*" element={<WrongPage />} />
							<Route path="_loading" element={<Loading />} />
						</Routes>
					</Suspense>
				</ErrorBoundary>
			</div>
		</div>
	);
}

export default App;
