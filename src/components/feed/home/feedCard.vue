<template>
	<div
		:id="item.id"
		class="feed-card"
		@mouseenter="showOverlay = true"
		@mouseleave="showOverlay = false"
	>
		<section class="feed-card__image">
			<img :src="item.path" :alt="item.title" />
			<div v-if="showOverlay" class="feed-card__overlay">
				<div class="feed-card__overlay-header">
					<div class="select-boards" @click="showSelectBoard()">
						<span>Board</span>
						<i class="fas fa-chevron-down"></i>
					</div>
					<button class="pinterest-button pinterest-button__red pinterest-button--bigger">
						Guardar
					</button>
				</div>
				<div
					class="feed-card__overlay-footer"
					:style="
						item.originPage !== ''
							? { justifyContent: 'space-between' }
							: { justifyContent: 'flex-end' }
					"
				>
					<div class="feed-card__overlay-origin">
						<button
							v-if="item.originPage !== ''"
							class="pinterest-button pinterest-button__gray pinterest-button--dotted"
						>
							<i class="fas fa-external-link-alt"></i>
							<span>{{ item.originPage }}</span>
						</button>
					</div>
					<div class="feed-card__overlay-buttons">
						<button class="pinterest-button pinterest-button__gray pinterest-button--icon">
							<i class="fas fa-download"></i>
						</button>
						<button class="pinterest-button pinterest-button__gray pinterest-button--icon">
							<i class="fas fa-ellipsis-h"></i>
						</button>
					</div>
				</div>
			</div>
		</section>
		<section class="feed-card__body">
			<span class="feed-card__title">{{ item.title }}</span>
			<div v-if="item.user.name" class="feed-card__avatar">
				<img class="avatar__image" :src="item.user.image" :alt="item.user.name" />
				<span class="avatar__name">{{ item.user.name }}</span>
			</div>
			<div v-if="item.reactions > 0" class="feed-card__reactions">
				<div class="reactions__type">
					<img src="../../../assets/img/reactions/star.svg" alt="star" />
					<img src="../../../assets/img/reactions/hearts.svg" alt="hearts" />
					<img src="../../../assets/img/reactions/thumb-up.svg" alt="thumbUp" />
				</div>
				<span class="reactions__quantity">{{ item.reactions }}</span>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { FeedCardModel } from "@/definitions/feed/FeedCardModel";

@Component({
	name: "FeedCard",
})
export default class FeedCard extends Vue {
	@Prop() item!: FeedCardModel;

	showOverlay = false;

	showSelectBoard() {
		this.$emit("showBoard", true);
	}

	@Watch("item", { deep: true })
	onItemChanged(value: FeedCardModel) {
		this.$emit("update", this.cardHeightSize());
	}

	cardHeightSize() {
		return document.getElementById(String(this.item.id))?.offsetHeight;
	}
}
</script>

<style></style>
