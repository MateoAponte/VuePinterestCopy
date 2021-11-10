<template>
	<div class="feed">
		<stack
			v-if="feedData.length > 0"
			:column-min-width="calcWidth"
			:gutter-width="15"
			:gutter-height="15"
			monitor-images-loaded
		>
			<stack-item v-for="item in feedData" :key="item.id">
				<feed-card
					:item="item"
					:height="previewData(item)"
					@udpate="item.imageData.previewHeight = $event"
					@showBoard="showSelectBoard = $event"
					@updatePosition="cardPosition = $event"
				/>
			</stack-item>
		</stack>
		<loader v-else />
		<SelectBoard
			:show="showSelectBoard"
			:position="cardPosition"
			@hideBoard="showSelectBoard = $event"
		/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import FeedCard from "./feedCard.vue";
import SelectBoard from "./selectBoard.vue";
import Loader from "./loader.vue";
import Stack from "vue-stack-grid/src/Stack.vue";
import StackItem from "vue-stack-grid/src/StackItem.vue";

import { MODULE_FEED } from "@/constants/modulesTypes";

import { FeedActionsType } from "@/constants/feed/home/actions";

@Component({
	name: "Feed",
	components: {
		FeedCard,
		Stack,
		StackItem,
		Loader,
		SelectBoard,
	},
})
export default class Feed extends Vue {
	showSelectBoard = false;
	cardPosition = {
		top: 0,
		left: 0,
	};

	get feedData() {
		return this.$store.state[MODULE_FEED].feed_data;
	}

	get paginationData() {
		return this.$store.state[MODULE_FEED].pagination_data;
	}

	previewData(item: any) {
		return item.imageData.previewHeight;
	}
	get calcWidth() {
		return window.innerWidth / 6 - 96;
	}

	mounted() {
		this.$store.dispatch(FeedActionsType.FETCH_FEED, this.paginationData);
		document.addEventListener("scroll", () => {
			const feedContainer = document.querySelector(".feed") || Element;
			const feedHeight = feedContainer.offsetHeight;
			const distanceTop = window.innerHeight + window.pageYOffset;
			console.log(distanceTop >= feedHeight - 200);
			if (distanceTop >= feedHeight - 200) {
				const pagination = {
					...this.paginationData,
				};
				pagination.page_number += 1;
				this.$store.dispatch(FeedActionsType.UPDATE_PAGINATION_DATA, pagination);
				this.$store.dispatch(FeedActionsType.FETCH_FEED, pagination);
			}
		});
	}
}
</script>

<style></style>
