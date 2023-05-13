<template>
	<section class="container">
		<feed />
	</section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Feed from "@/components/feed/home/feed.vue";

@Component({
	name: "Home",
	components: {
		Feed,
	},
})
export default class FeedHome extends Vue {}
</script>

<style></style>
