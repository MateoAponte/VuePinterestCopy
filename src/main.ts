import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.scss";

import Tags from "@/components/common/tags.vue";

Vue.config.productionTip = false;

Vue.component("Tags", Tags);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
