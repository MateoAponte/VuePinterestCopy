<template>
	<div class="popover__section">
		<span class="popover__title">{{ title }}</span>
		<div class="popover__group">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
	name: "PopoverSection",
})
export default class PopoverSection extends Vue {
	@Prop() private title!: string;
}
</script>

<style></style>
