import axios from "axios";
axios.defaults.baseURL =
	process.env.NODE_ENV === "production" ? "https://goserve.febkosq8.me" : "http://localhost:3030";
class APIHandler {
	static async getSmolURL(shortName: string) {
		const response = await axios.get(`/smolURL?shortName=${shortName}`);
		const data = await response.data;
		return data;
	}
	static async addShortURL({ shortName, fullURL }: { shortName: string; fullURL: string }) {
		const response = await axios.post(`/smolURL?shortName=${shortName}&fullURL=${fullURL}`);
		const data = await response.data;
		return data;
	}
}
export default APIHandler;
