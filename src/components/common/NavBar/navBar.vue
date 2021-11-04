<template>
	<section>
		<nav class="navbar">
			<section class="navbar__items">
				<div class="navbar__link navbar__link-logo">
					<img class="navbar__logo" src="@/assets/img/logo.svg" alt="Logo" />
				</div>
				<router-link class="navbar__link" to="/">Inicio</router-link>
				<router-link class="navbar__link" to="/about">Hoy</router-link>
			</section>
			<section class="navbar__searcher">
				<div id="navbar__searcher" class="navbar__searcher-input">
					<input id="searcher__input" class="searcher__input" placeholder="Buscar" />
					<i class="searcher__icon fas fa-search"></i>
				</div>
			</section>
			<section class="navbar__items">
				<a class="navbar__icon">
					<i class="fas fa-bell">
						<span class="navbar__notifications">1</span>
					</i>
				</a>
				<a class="navbar__icon">
					<i class="fas fa-comment-dots"></i>
				</a>
				<a class="navbar__icon">
					<i class="fas fa-user"></i>
				</a>
				<a class="navbar__icon navbar__icon--small">
					<i class="fas fa-chevron-down"></i>
				</a>
			</section>
		</nav>
		<div v-show="isRecommended" class="navbar__searcher-recommended">
			<div class="recommended__popover">
				<popover-section title="Búsquedas recientes">
					<section v-for="(item, index) in searcherData.recentSearchs" :key="index">
						<tags :value="item.name" class="popover__item" />
					</section>
				</popover-section>
				<popover-section :title="userFeedTitle">
					<section v-for="(item, index) in userFeedRecommendation" :key="index">
						<popover-category :name="item.name" :path="item.img" />
					</section>
				</popover-section>
				<popover-section :title="popularFeedTitle">
					<section v-for="(item, index) in popularFeedRecommendation" :key="index">
						<popover-category :name="item.name" :path="item.img" />
					</section>
				</popover-section>
				<popover-section :title="specialFeedTitle">
					<section v-for="(item, index) in specialFeedRecommendation" :key="index">
						<popover-category :name="item.name" :path="item.img" />
					</section>
				</popover-section>
			</div>
			<div id="searcher__overlay" class="recommended__overlay"></div>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { NavModel } from "@/definitions/NavModel";

import PopoverSection from "./popoverSection.vue";
import PopoverCategory from "./popoverCategory.vue";

import mockNavbar from "@/helpers/mocks/navBar/navBar";

@Component({
	name: "NavBar",
	components: {
		PopoverSection,
		PopoverCategory,
	},
})
export default class NavBar extends Vue {
	isRecommended = false;
	searcherData = {} as NavModel;

	get userFeedTitle(): string {
		return this.searcherData.userFeed?.title || "";
	}
	get userFeedRecommendation() {
		return this.searcherData.userFeed?.recommendation || [];
	}

	get popularFeedTitle(): string {
		return this.searcherData.popularFeed?.title || "";
	}
	get popularFeedRecommendation() {
		return this.searcherData.popularFeed?.recommendation || [];
	}

	get specialFeedTitle(): string {
		return this.searcherData.specialFeed?.title || "";
	}
	get specialFeedRecommendation() {
		return this.searcherData.specialFeed?.recommendation || [];
	}

	showRecommended(show: boolean) {
		this.isRecommended = show;
	}

	mounted() {
		const searcher = document.getElementById("navbar__searcher") || new Node();
		const input = document.getElementById("searcher__input") || new HTMLInputElement();
		const overlay = document.getElementById("searcher__overlay") || new Node();

		input.addEventListener("focus", () => {
			this.showRecommended(true);
		});
		searcher.addEventListener("click", () => {
			input.focus();
		});
		overlay.addEventListener("click", () => {
			this.showRecommended(false);
		});
		setTimeout(() => {
			this.searcherData = mockNavbar;
		}, 2000);
	}
}
</script>

<style></style>
