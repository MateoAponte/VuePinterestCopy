<template>
	<div
		:id="item.id"
		class="feed-card"
		@mouseenter="showOverlay = true"
		@mouseleave="showOverlay = false"
	>
		<section class="feed-card__image">
			<img :src="item.path" :alt="item.title" />
			<div v-if="showOverlay || isActive" class="feed-card__overlay">
				<div class="feed-card__overlay-header">
					<div :id="randomId" class="select-boards" @click="showSelectBoard($event)">
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
							@click="redirectPage(item.originPage)"
						>
							<i class="fas fa-external-link-alt"></i>
							<span>{{ item.originPage }}</span>
						</button>
					</div>
					<div class="feed-card__overlay-buttons">
						<button
							id="shared-board-button"
							class="pinterest-button pinterest-button__gray pinterest-button--icon"
							@click="showSharedBoard($event)"
						>
							<i class="fas fa-download"></i>
						</button>
						<button
							id="more-info-board-button"
							class="pinterest-button pinterest-button__gray pinterest-button--icon"
							@click="showMoreInfoBoard($event)"
						>
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
import { events } from "@/constants/feed/home/dictionary";

@Component({
	name: "FeedCard",
})
export default class FeedCard extends Vue {
	@Prop() item!: FeedCardModel;
	@Prop() index!: number;

	showOverlay = false;
	isActive = false;
	randomId = Math.floor(Math.random() * (2000 - 1) + 2000);

	showActive() {
		this.isActive = true;
	}

	showSelectBoard() {
		const target = document.getElementById(String(this.randomId)) || new HTMLElement();
		var topPos = target.getBoundingClientRect().top + window.pageYOffset;
		var leftPos = target.getBoundingClientRect().left;
		this.showActive();
		this.$emit("updatePosition", { top: topPos, left: leftPos });
		this.$emit(events.SHOW_BOARD, true);
	}

	showMoreInfoBoard() {
		const target = document.getElementById(String(this.randomId)) || new HTMLElement();
		var topPos = target.getBoundingClientRect().top + window.pageYOffset;
		var leftPos = target.getBoundingClientRect().left;
		this.showActive();
		this.$emit("updatePosition", { top: topPos, left: leftPos });
		this.$emit(events.SHOW_MORE_INFO, true);
	}

	showSharedBoard() {
		const target = document.getElementById(String(this.randomId)) || new HTMLElement();
		var topPos = target.getBoundingClientRect().top + window.pageYOffset;
		var leftPos = target.getBoundingClientRect().left;
		this.showActive();
		this.$emit("updatePosition", { top: topPos, left: leftPos });
		this.$emit(events.SHOW_SHARED, true);
	}

	@Watch("item", { deep: true })
	onItemChanged(value: FeedCardModel) {
		this.$emit("update", this.cardHeightSize());
	}

	cardHeightSize() {
		return document.getElementById(String(this.item.id))?.offsetHeight;
	}

	redirectPage(page: string) {
		window.open("https://www." + page, "_blank");
	}

	mounted() {
		document.addEventListener("click", (event: MouseEvent) => {
			const element = document.querySelectorAll(".feed-card")[this.index];

			const includeInPath = event.composedPath()?.find((eventElement: HTMLElement) => {
				return eventElement === element;
			});

			if (includeInPath !== element) {
				this.isActive = false;
			}
		});
	}
}
</script>
