import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";

import { RootState } from "@/definitions/root/rootState";
import { FeedState } from "@/definitions/feed/feedState";

import { Module } from "vuex";

export const FeedHomeStore: Module<FeedState, RootState> = {
	state,
	actions,
	mutations,
	getters,
};
