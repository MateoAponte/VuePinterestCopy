import { FeedState } from "@/definitions/feed/feedState";

import { FeedCardModel } from "@/definitions/feed/FeedCardModel";
import { Pagination } from "@/definitions/feed/PaginationData";

export const state: FeedState = {
	feed_data: Array<FeedCardModel>(),
	pagination_data: <Pagination>{
		page_number: 1,
		page_size: 35,
		query_name: "",
	},
};
