<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h3>{{ fullName }}</h3>
		<button @click="click(5)">A ver</button>
		<section v-for="(client, index) in clients" :key="index">
			<h1>{{ client.dimension }}</h1>
			<h1>{{ client.radius }}</h1>
			<h1>{{ client.label }}</h1>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Example from "./Example.vue";

@Component({
	name: "StartComponent",
	components: {
		Example,
	},
})
export default class HelloWorld extends Vue {
	@Prop() private msg!: string;

	name = "Mateo";
	lastname = "Aponte";
	get fullName() {
		return `${this.name} - ${this.lastname}`;
	}

	click(index: number) {
		alert("Alerta pitto " + index);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
