import axios from "axios";
axios.defaults.baseURL = import.meta.env?.VITE_SERVE_URL ?? "https://serve.febkosq8.me";
class APIHandler {
	static async getSmolURL(shortName: string) {
		const response = await axios.get(`/publicapi/v1/smolURL?shortName=${shortName}`);
		return await response.data;
	}
	static async addShortURL({ shortName, fullURL }: { shortName: string; fullURL: string }) {
		const response = await axios.post(`/publicapi/v1/smolURL?shortName=${shortName}&fullURL=${fullURL}`);
		return await response.data;
	}
}
export default APIHandler;
