<template>
	<div class="tag">
		<slot>
			{{ value }}
		</slot>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
	name: "Tag",
})
export default class Tag extends Vue {
	@Prop() private value!: string;
}
</script>
