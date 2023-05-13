import { GetterTree } from "vuex";

import { RootState } from "@/definitions/root/rootState";
import { FeedState } from "@/definitions/feed/feedState";

import { FeedCardModel } from "@/definitions/feed/FeedCardModel";

export const getters: GetterTree<FeedState, RootState> = {
	getUserInfo(state): FeedCardModel {
		return state.feed_data[0] || {};
	},
};
