<template>
	<div
		v-if="showPopover"
		id="select-board"
		class="select-board"
		:style="{
			top: popoverPosition.top + 'px',
			left: popoverPosition.left + 'px',
		}"
	>
		<div class="select-board__popover">
			<div class="select-board__popover-header">
				<div class="select-board__popover-section">
					<span>Guardar en tablero</span>
				</div>
				<div class="select-board__popover-section">
					<input-searcher
						id="searcher__board"
						class="select-board__popover-input"
						placeholder="Buscar"
					/>
				</div>
			</div>
			<div class="select-board__popover-body popover-boards">
				<popover-board-list title="Todos los tableros" :boards="boards" />
				<popover-board-list title="Sugerencias" :boards="suggestion" />
			</div>
			<div class="select-board__popover-footer popover-list">
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
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import InputSearcher from "@/components/common/input.vue";
import PopoverBoardList from "./PopoverBoardList.vue";
import { BoardModel } from "@/definitions/feed/BoardModel";
import { Position } from "@/definitions/common/position";

@Component({
	name: "SelectBoard",
	components: {
		InputSearcher,
		PopoverBoardList,
	},
})
export default class SelectBoard extends Vue {
	popoverPosition = {} as Position;
	showPopover = false;
	boards = Array<BoardModel>();
	suggestion = Array<BoardModel>();
	popover = false;

	@Prop() suggested_board!: string;
	@Prop() position!: Position;
	@Prop() show!: boolean;

	@Watch("show", { deep: true, immediate: true })
	onShowChanged(value: boolean) {
		this.showPopover = value;
	}

	@Watch("position", { deep: true, immediate: true })
	onPositionChanged(value: Position) {
		this.popoverPosition = this.calculatePosition(value);
	}

	calculatePosition(value: Position) {
		const element = document.getElementById("select-board");
		const selectBoard = document.querySelectorAll<HTMLElement>(".select-boards")[0];
		const height = element?.offsetHeight || 0;
		const width = element?.offsetWidth || 0;
		let realTop = Number(value.top) - 50;
		let realLeft = Number(value.left) - width / 2;

		const windowHeight = window.innerHeight + window.pageYOffset;

		const elementTop = Number(value.top) + height;
		const halfElementTop = Number(value.top) + height / 2;
		if (elementTop > windowHeight) {
			if (halfElementTop > windowHeight) {
				realTop = Number(value.top) - height - selectBoard?.offsetHeight - 80;
				realLeft = Number(value.left) - width / 2;
			} else {
				realTop = Number(value.top) - height / 2 - 50;
				realLeft = Number(value.left) - width - selectBoard?.offsetWidth + 20;
			}
		}
		if (realLeft < 0) {
			realLeft = Number(value.left) + 0;
		}
		return { top: String(realTop), left: String(realLeft) };
	}

	mounted() {
		this.boards.push(
			{
				id: null,
				image:
					"https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
				name: "New board New board New board",
				isSuggestion: false,
				isPrivate: false,
				total: 104,
				lastEdition: new Date(),
				tags: [],
			},
			{
				id: null,
				image:
					"https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
				name: "New board New board New board",
				isSuggestion: false,
				isPrivate: false,
				total: 104,
				lastEdition: new Date(),
				tags: [],
			},
			{
				id: null,
				image:
					"https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
				name: "New board New board New board",
				isSuggestion: false,
				isPrivate: false,
				total: 104,
				lastEdition: new Date(),
				tags: [],
			},
			{
				id: null,
				image:
					"https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
				name: "New board New board New board",
				isSuggestion: false,
				isPrivate: false,
				total: 104,
				lastEdition: new Date(),
				tags: [],
			},
		);
		this.suggestion.push(
			{
				id: null,
				image: null,
				name: "New board",
				isSuggestion: true,
				isPrivate: false,
				total: 104,
				lastEdition: new Date(),
				tags: [],
			},
			{
				id: null,
				image: null,
				name: "New board",
				isSuggestion: true,
				isPrivate: false,
				total: 104,
				lastEdition: new Date(),
				tags: [],
			},
			{
				id: null,
				image: null,
				name: "New board",
				isSuggestion: true,
				isPrivate: false,
				total: 104,
				lastEdition: new Date(),
				tags: [],
			},
		);
		document.addEventListener("click", (event: MouseEvent) => {
			let targetClass;
			event.target?.className === "select-boards" && (targetClass = event.target?.className);
			event.target?.parentElement.className === "select-boards" &&
				(targetClass = event.target?.parentElement.className);
			if (this.show && targetClass !== "select-boards") {
				const element = document.getElementById("select-board");
				const includeInPath = event.path.find(
					(eventElement: HTMLElement) => eventElement === element,
				);
				this.$emit("hideBoard", !!includeInPath);
			}
		});
	}
}
</script>

<style></style>
