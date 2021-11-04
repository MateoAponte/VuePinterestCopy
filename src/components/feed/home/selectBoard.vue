<template>
	<div
		v-if="!showPopover"
		id="select-board"
		class="select-board"
		:style="{
			top: position.top,
			left: position.left,
			bottom: position.bottom,
			right: position.right,
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

	@Prop() suggested_board!: string;
	@Prop() position!: Position;
	@Prop() show!: boolean;

	@Watch("show", { deep: true, immediate: true })
	onShowChanged(value: boolean) {
		this.showPopover = value;
	}

	boards = Array<BoardModel>();
	suggestion = Array<BoardModel>();
	popover = false;

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
	}
}
</script>

<style></style>
