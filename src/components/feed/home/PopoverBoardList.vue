<template>
	<div class="popover-list">
		<span class="popover-list__title">{{ title }}</span>
		<section v-for="(board, index) in boards" :key="index" class="popover-item">
			<div class="popover-item__icon">
				<img
					v-if="!board.isSuggestion"
					class="popover-item__image"
					:src="board.image"
					:alt="board.name"
				/>
				<div v-else class="popover-item__add">
					<i class="fas fa-plus"></i>
				</div>
			</div>
			<div class="popover-item__row">
				<div class="popover-item__title">
					<span>{{ board.name }}</span>
				</div>
				<div class="popover-item__button">
					<button class="pinterest-button pinterest-button__red pinterest-button--bigger">
						{{ isSuggestion(board) }}
					</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { BoardModel } from "@/definitions/feed/BoardModel";

@Component({
	name: "PopoverBoardList",
})
export default class PopoverBoardList extends Vue {
	@Prop() title!: string;
	@Prop() boards!: Array<BoardModel>;

	isSuggestion(board: BoardModel) {
		return board.isSuggestion ? "Crear" : "Guardar";
	}
}
</script>

<style></style>
