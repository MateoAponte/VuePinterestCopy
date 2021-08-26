import { MutationTree } from "vuex";

import { FeedState } from "@/definitions/feed/feedState";

import { FeedCardModel } from "@/definitions/feed/FeedCardModel";

import { FeedMutationsType } from "@/constants/feed/home/mutations";

export const mutations: MutationTree<FeedState> = {
	[FeedMutationsType.SET_FEED_DATA](state, payload: Array<FeedCardModel>) {
		state.feed_data = payload;
	},
};
