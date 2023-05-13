<template>
	<div :id="id">
		<input :id="createId" class="searcher__input" :placeholder="placeholder" />
		<i class="searcher__icon fas fa-search"></i>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "InputSearcher",
})
export default class InputSearcher extends Vue {
	@Prop() id!: string;
	@Prop() placeholder!: string;
	@Prop() hasOverlay!: boolean;
	@Prop({ default: null }) idOverlay!: string | null;

	get createId() {
		return this.id + Math.floor(Math.random() * (50 - 1) + 1);
	}

	mounted() {
		const searcher = document.getElementById(this.id) || new HTMLElement();
		const input = document.getElementById(this.createId) || new HTMLInputElement();

		input.addEventListener("focus", () => {
			this.$emit("focus", true);
		});
		searcher.addEventListener("click", () => {
			input.focus();
		});
		if (this.idOverlay !== null) {
			const overlay = document.getElementById(this.idOverlay) || new Node();
			overlay.addEventListener("click", () => {
				this.$emit("focus", false);
			});
		}
	}
}
</script>

<style></style>
