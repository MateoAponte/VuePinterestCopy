<template>
	<Popover
		id="more-info-board"
		:show="showPopover"
		:position="popoverPosition"
		:has-footer="hasFooter"
		:has-header="hasHeader"
		class="more-info-board"
	>
		<template v-slot:body>
			<section>
				<span class="more-info__title">Este Pin estaba inspirado en tu actividad reciente</span>
			</section>
			<section>
				<span class="more-info__item">Ocultar Pin</span>
				<span class="more-info__item">Descargar Imagen</span>
				<span class="more-info__item">Reportar Pin</span>
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

@Component({
	name: "SharedBoard",
	components: {
		Popover,
	},
})
export default class SharedBoard extends Vue {
	popoverPosition = {} as Position;
	showPopover = false as boolean;
	popover = false as boolean;
	hasHeader = false as boolean;
	hasFooter = false as boolean;
	firtsAttemp = true as boolean;

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
			"more-info-board",
			".feed-card__overlay",
			popoverTypes.MORE_INFO,
		);
	}

	mounted() {
		document.addEventListener("click", (event: MouseEvent) => {
			const element = document.getElementById("more-info-board");
			const button = document.getElementById("more-info-board-button");

			const targetClass = event.composedPath()?.find((eventElement: HTMLElement) => {
				const arrayClasses = eventElement.className?.split(" ").indexOf("more-info-board");
				return arrayClasses !== -1 && arrayClasses !== undefined;
			});
			const includeInPath = event.composedPath()?.find((eventElement: HTMLElement) => {
				return eventElement === element || eventElement === button;
			});

			if (includeInPath === button || includeInPath !== undefined || targetClass !== undefined) {
				if (this.firtsAttemp) {
					if (this.firtsAttemp && includeInPath === button) {
						this.$emit(events.HIDE_MORE_INFO, !!includeInPath);
					} else if (!this.firtsAttemp && includeInPath === button) {
						this.$emit(events.HIDE_MORE_INFO, false);
					}
					this.firtsAttemp = false;
				}
			} else {
				this.firtsAttemp = true;
				this.$emit(events.HIDE_MORE_INFO, false);
			}
		});
	}
}
</script>
