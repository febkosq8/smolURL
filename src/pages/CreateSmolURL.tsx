import Header from "@smolurl/components/smolurl/Header";
import Create from "@smolurl/components/smolurl/Create";
export default function ShortURL() {
	document.title = "SmolURL";
	return (
		<div className="smolurl flex flex-col justify-center items-center">
			<Header />
			<Create />
		</div>
	);
}
