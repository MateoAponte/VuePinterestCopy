import Vue from "vue";
import Vuex from "vuex";

import { StoreOptions } from "vuex";

import { RootState } from "@/definitions/root/rootState";

import { MODULE_FEED } from "@/constants/modulesTypes";

import { FeedHomeStore } from "./feed/home/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
	modules: {
		[MODULE_FEED]: FeedHomeStore,
	},
};
export default new Vuex.Store<RootState>(store);
