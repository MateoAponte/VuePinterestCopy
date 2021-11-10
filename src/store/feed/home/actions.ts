import { ActionTree } from "vuex";
import FeedApi from "@/api/feed/feedApi";

import { FeedState } from "@/definitions/feed/feedState";
import { RootState } from "@/definitions/root/rootState";

import { FeedActionsType } from "@/constants/feed/home/actions";
import { FeedMutationsType } from "@/constants/feed/home/mutations";

import { FeedCardModel } from "@/definitions/feed/FeedCardModel";
import { FetchResponseModel } from "@/definitions/feed/FetchResponseModel";
import { Pagination } from "@/definitions/feed/PaginationData";

export const actions: ActionTree<FeedState, RootState> = {
	[FeedActionsType.FETCH_FEED]({ dispatch }, payload: Pagination) {
		FeedApi.getFeedData(payload).then((response) => {
			dispatch(FeedActionsType.TRANSFORM_FETCH_DATA, response.data.hits);
		});
	},
	[FeedActionsType.UPDATE_PAGINATION_DATA]({ commit }, payload: Pagination) {
		commit(FeedMutationsType.SET_PAGINATION_DATA, payload);
	},
	[FeedActionsType.TRANSFORM_FETCH_DATA]({ commit, state }, payload) {
		const feedCardList = Array<FeedCardModel>();
		const defaultData = state.feed_data;
		payload.forEach((item: FetchResponseModel) => {
			const feedItem = {} as FeedCardModel;
			const randomNumber = Math.floor(Math.random() * (2 - 0) + 0);
			feedItem.path = item.previewURL;
			feedItem.user =
				randomNumber === 1
					? { image: item.userImageURL, name: item.user }
					: { image: "", name: "" };
			feedItem.imageData = {
				previewWidth: item.previewWidth,
				previewHeight: item.previewHeight,
				imageHeight: item.imageHeight,
				imageWidth: item.imageWidth,
			};
			feedItem.tags = item.tags.split(", ");
			feedItem.originPage = randomNumber === 1 ? "Pixabay.com" : "";
			feedItem.title = item.pageURL
				.replace(/https:\/\/pixabay.com\/photos\//g, "")
				.replace(/-/g, " ")
				.replace(/\//g, "");
			feedItem.reactions = randomNumber === 0 ? item.likes : 0;
			feedItem.id = item.id;
			feedCardList.push(feedItem);
		});
		defaultData.push(...feedCardList);
		commit(FeedMutationsType.SET_FEED_DATA, defaultData);
	},
};
