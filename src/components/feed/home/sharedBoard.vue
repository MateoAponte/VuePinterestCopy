<template>
	<Popover
		id="shared-board"
		:show="showPopover"
		:position="popoverPosition"
		:has-header="hasHeader"
		:header-text="headerText"
		class="shared-board"
	>
		<template v-slot:body class="popover-boards">
			<section class="shared__section">
				<span class="shared__title">Compartir</span>
				<div class="shared__section-row">
					<div
						v-for="(item, index) in shared"
						:key="index"
						class="shared__icon"
						@click="window.open(item.urlAction, '_blank')"
					>
						<div class="shared__img">
							<span>
								<i :class="item.icon"></i>
							</span>
						</div>
						<span class="shared__label">
							{{ item.label }}
						</span>
					</div>
				</div>
			</section>
			<section class="shared__divider">
				<hr />
			</section>
			<section class="shared__section">
				<span class="shared__title">Enviar en Pinterest</span>
				<div class="shared__section-row">
					<div v-for="(item, index) in friends" :key="index" class="shared__icon">
						<img :src="item.img" class="shared__img" />
						<span class="shared__label">
							{{ item.label }}
						</span>
					</div>
				</div>
			</section>
		</template>
	</Popover>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

import Popover from "@/components/common/popover.vue";

import { recalculate } from "@/helpers/mixins/calculatePosition";
import { Position } from "@/definitions/common/position";
import { events, popoverTypes } from "@/constants/feed/home/dictionary";

import { SHARED_MEDIA } from "@/constants/feed/home/shared";
import { FRIENDS } from "@/constants/back/friends";
import { SharedModel } from "@/definitions/feed/sharedModel";

@Component({
	name: "SelectBoard",
	components: {
		Popover,
	},
})
export default class MoreInfoBoard extends Vue {
	popoverPosition = {} as Position;
	showPopover = false as boolean;
	popover = false as boolean;
	hasHeader = false as boolean;
	hasFooter = false as boolean;
	firtsAttemp = true as boolean;
	headerText = "Compartir" as string;
	shared = Array<SharedModel>();
	friends = Array<SharedModel>();

	@Prop() suggested_board!: string;
	@Prop() position!: Position;
	@Prop() show!: boolean;

	@Watch("show", { deep: true, immediate: true })
	onShowChanged(value: boolean) {
		this.showPopover = value;
	}

	@Watch("position", { deep: true, immediate: true })
	async onPositionChanged(value: Position) {
		this.popoverPosition = await recalculate(
			value,
			"shared-board",
			".feed-card__overlay",
			popoverTypes.SHARED,
		);
	}

	mounted() {
		this.shared.push(...SHARED_MEDIA);
		this.friends.push(...FRIENDS);
		document.addEventListener("click", (event: MouseEvent) => {
			const element = document.getElementById("shared-board");
			const button = document.getElementById("shared-board-button");

			const targetClass = event.composedPath()?.find((eventElement: HTMLElement) => {
				const arrayClasses = eventElement.className?.split(" ").indexOf("shared-board");
				return arrayClasses !== -1 && arrayClasses !== undefined;
			});
			const includeInPath = event.composedPath()?.find((eventElement: HTMLElement) => {
				return eventElement === element || eventElement === button;
			});

			if (includeInPath === button || includeInPath !== undefined || targetClass !== undefined) {
				if (this.firtsAttemp) {
					if (this.firtsAttemp && includeInPath === button) {
						this.$emit(events.HIDE_SHARED, !!includeInPath);
					} else if (!this.firtsAttemp && includeInPath === button) {
						this.$emit(events.HIDE_SHARED, false);
					}
					this.firtsAttemp = false;
				}
			} else {
				this.firtsAttemp = true;
				this.$emit(events.HIDE_SHARED, false);
			}
		});
	}
}
</script>
