import Header from "@smolurl/components/smolurl/Header";
import Main from "@smolurl/components/smolurl/Main";
export default function ShortURL() {
	document.title = "SmolURL";
	return (
		<div className="smolurl flex flex-col justify-center items-center">
			<Header />
			<Main />
		</div>
	);
}
