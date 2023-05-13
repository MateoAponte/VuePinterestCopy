import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Tags from "@/components/common/tags.vue";

Vue.config.productionTip = false;

library.add(faSpinner);

Vue.component("Tags", Tags);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
