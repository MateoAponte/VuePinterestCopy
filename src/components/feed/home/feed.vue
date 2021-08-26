<template>
	<div class="feed">
		<stack
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
				/>
			</stack-item>
		</stack>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import FeedCard from "./feedCard.vue";
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
	},
})
export default class Feed extends Vue {
	get feedData() {
		return this.$store.state[MODULE_FEED].feed_data;
	}

	previewData(item: any) {
		return item.imageData.previewHeight;
	}
	get calcWidth() {
		return window.innerWidth / 6 - 96;
	}

	mounted() {
		this.$store.dispatch(FeedActionsType.FETCH_FEED);
		this.$store.dispatch(FeedActionsType.FETCH_FEED);
	}
}
</script>

<style></style>
