<template>
	<Popover
		id="select-board"
		class="select-board"
		:show="showPopover"
		:has-header="hasHeader"
		:header-text="headerText"
		:position="popoverPosition"
		:has-footer="hasFooter"
	>
		<template v-slot:header>
			<input-searcher
				id="searcher__board"
				class="select-board__popover-input"
				placeholder="Buscar"
			/>
		</template>
		<template v-slot:body class="popover-boards">
			<popover-board-list title="Últimas elecciones" :boards="suggestion" />
			<popover-board-list title="Todos los tableros" :boards="boards" />
		</template>
		<template v-slot:footer>
			<section class="popover-item">
				<div class="popover-item__icon">
					<div class="popover-item__add">
						<i class="fas fa-plus"></i>
					</div>
				</div>
				<div class="popover-item__row">
					<div class="popover-item__title">
						<span>Crear tablero</span>
					</div>
				</div>
			</section>
		</template>
	</Popover>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import InputSearcher from "@/components/common/input.vue";
import PopoverBoardList from "./PopoverBoardList.vue";
import Popover from "@/components/common/popover.vue";
import { BoardModel } from "@/definitions/feed/BoardModel";
import { Position } from "@/definitions/common/position";
import { SUGGESTIONS } from "@/constants/back/suggestions";
import { BOARDS } from "@/constants/back/boards";

import { recalculateSelectBoard } from "@/helpers/mixins/calculatePosition";
import { events } from "@/constants/feed/home/dictionary";

@Component({
	name: "SelectBoard",
	components: {
		InputSearcher,
		PopoverBoardList,
		Popover,
	},
})
export default class SelectBoard extends Vue {
	popoverPosition = {} as Position;
	boards = Array<BoardModel>();
	suggestion = Array<BoardModel>();
	showPopover = false as boolean;
	hasHeader = true as boolean;
	hasFooter = true as boolean;
	firtsAttemp = true as boolean;
	headerText = "Guardar" as string;

	@Prop() suggested_board!: string;
	@Prop() position!: Position;
	@Prop() show!: boolean;

	@Watch("show", { deep: true, immediate: true })
	onShowChanged(value: boolean) {
		this.showPopover = value;
	}

	@Watch("position", { deep: true, immediate: true })
	async onPositionChanged(value: Position) {
		this.popoverPosition = await recalculateSelectBoard(value, "select-board", ".select-boards");
	}

	mounted() {
		this.boards.push(...BOARDS);
		this.suggestion.push(...SUGGESTIONS);
		document.addEventListener("click", (event: MouseEvent) => {
			const element = document.getElementById("shared-board");

			// @ts-ignore
			const targetClass = event.composedPath()?.find((eventElement: HTMLElement) => {
				const arrayClasses = eventElement.className?.split(" ").indexOf("shared-board");
				return arrayClasses !== -1 && arrayClasses !== undefined;
			});
			// @ts-ignore
			const includeInPath = event.composedPath()?.find((eventElement: HTMLElement) => {
				return eventElement === element;
			});

			if (includeInPath !== undefined || targetClass !== undefined) {
				if (this.firtsAttemp) {
					if (this.firtsAttemp) {
						this.$emit(events.HIDE_SHARED, !!includeInPath);
					} else if (!this.firtsAttemp) {
						this.$emit(events.HIDE_SHARED, false);
					}
					this.firtsAttemp = false;
				}
			} else {
				this.firtsAttemp = true;
				this.$emit(events.HIDE_SHARED, false);
			}
		});

		document.addEventListener("click", (event: MouseEvent) => {
			let targetClass;
			// @ts-ignore
			event.target?.className === "select-boards" && (targetClass = event.target?.className);
			// @ts-ignore
			event.target?.parentElement.className === "select-boards" &&
				// @ts-ignore
				(targetClass = event.target?.parentElement.className);

			if (this.show && targetClass !== "select-boards") {
				const element = document.getElementById("select-board");
				// @ts-ignore
				const includeInPath = event.composedPath()?.find((eventElement: HTMLElement) => {
					return eventElement === element;
				});

				this.$emit(events.HIDE_BOARD, !!includeInPath);
			}
		});
	}
}
</script>
