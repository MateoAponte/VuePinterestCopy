import { Pagination } from "@/definitions/feed/PaginationData";
import axios from "axios";
import { AxiosInteceptor } from "../utils/inteceptor";

export class FeedApi {
	getFeedData(query: Pagination) {
		return axios.get(
			process.env.VUE_APP_ENDPOINT_GET_FEED_IMAGES +
				"/?key=" +
				process.env.VUE_APP_X_API_KEY +
				"&per_page=" +
				query.page_size +
				"&page=" +
				query.page_number,
		);
	}
}

export default new FeedApi();
