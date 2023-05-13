<template>
	<div
		v-if="show"
		class="select-board"
		:style="{
			top: position.top + 'px',
			left: position.left + 'px',
		}"
	>
		<div class="select-board__popover">
			<div v-if="hasHeader" class="select-board__popover-header">
				<div class="select-board__popover-section">
					<span>{{ headerText }}</span>
				</div>
				<div class="select-board__popover-section">
					<slot name="header" />
				</div>
			</div>
			<div class="select-board__popover-body">
				<slot name="body" />
			</div>
			<div v-if="hasFooter" class="select-board__popover-footer popover-list">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Position } from "@/definitions/common/position";

@Component({
	name: "Popover",
})
export default class Popover extends Vue {
	@Prop({ default: false }) hasHeader!: boolean;
	@Prop({ default: "" }) headerText!: string;
	@Prop({ default: false }) show!: boolean;
	@Prop({
		default: {
			top: "0px",
			left: "0px",
		},
	})
	position!: Position;
	@Prop({ default: false }) hasFooter!: boolean;
}
</script>
