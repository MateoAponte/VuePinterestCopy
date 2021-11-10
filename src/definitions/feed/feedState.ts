import { FeedCardModel } from "./FeedCardModel";
import { Pagination } from "./PaginationData";

export interface FeedState {
	feed_data: Array<FeedCardModel>;
	pagination_data: Pagination;
}
