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
					@showBoard="showSelectBoard = $event"
				/>
			</stack-item>
		</stack>
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
import Stack from "vue-stack-grid/src/Stack.vue";
import StackItem from "vue-stack-grid/src/StackItem.vue";

import { MODULE_FEED } from "@/constants/modulesTypes";

import { Position } from "@/definitions/common/position";
import { FeedActionsType } from "@/constants/feed/home/actions";

@Component({
	name: "Feed",
	components: {
		FeedCard,
		Stack,
		StackItem,
		SelectBoard,
	},
})
export default class Feed extends Vue {
	showSelectBoard = false;
	cardPosition = {
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
	};

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
	}
}
</script>

<style></style>
