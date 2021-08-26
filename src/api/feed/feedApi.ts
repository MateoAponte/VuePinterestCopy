import axios from "axios";
import { AxiosInteceptor } from "../utils/inteceptor";

export class FeedApi {
	getFeedData() {
		return axios.get(
			process.env.VUE_APP_ENDPOINT_GET_FEED_IMAGES +
				"/?key=" +
				process.env.VUE_APP_X_API_KEY +
				"&per_page=35&page=1",
		);
	}
}

export default new FeedApi();
