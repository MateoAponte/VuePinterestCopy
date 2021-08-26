import { ActionTree } from "vuex";
import FeedApi from "@/api/feed/feedApi";

import { FeedState } from "@/definitions/feed/feedState";
import { RootState } from "@/definitions/root/rootState";

import { FeedActionsType } from "@/constants/feed/home/actions";
import { FeedMutationsType } from "@/constants/feed/home/mutations";

import { FeedCardModel } from "@/definitions/feed/FeedCardModel";
import { FetchResponseModel } from "@/definitions/feed/FetchResponseModel";

export const actions: ActionTree<FeedState, RootState> = {
	[FeedActionsType.FETCH_FEED]({ dispatch }) {
		FeedApi.getFeedData().then((response) => {
			dispatch(FeedActionsType.TRANSFORM_FETCH_DATA, response.data.hits);
		});
	},
	[FeedActionsType.TRANSFORM_FETCH_DATA]({ commit }, payload) {
		const feedCardList = Array<FeedCardModel>();
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
		commit(FeedMutationsType.SET_FEED_DATA, feedCardList);
	},
};
