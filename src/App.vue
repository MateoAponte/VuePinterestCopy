<template>
	<div id="app">
		<nav-bar />
		<main class="main-container">
			<router-view />
		</main>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/common/NavBar/navBar.vue";

@Component({
	name: "Pinterest",
	components: {
		NavBar,
	},
})
export default class Pinterest extends Vue {}
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
