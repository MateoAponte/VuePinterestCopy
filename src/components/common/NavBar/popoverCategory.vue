<template>
	<div class="popover__category">
		<img :src="path" :alt="name" class="popover__category-image" />
		<div class="popover__category-overlay">
			<span class="popover__category-title">{{ name }}</span>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
	name: "PopoverCategory",
})
export default class PopoverCategory extends Vue {
	@Prop() private path!: string;
	@Prop() private name!: string;
}
</script>
