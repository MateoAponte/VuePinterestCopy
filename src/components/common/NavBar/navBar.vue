<template>
	<section>
		<nav class="navbar">
			<section class="navbar__items">
				<div class="navbar__link navbar__link-logo">
					<img class="navbar__logo" src="@/assets/img/logo.svg" alt="Logo" />
				</div>
				<router-link class="navbar__link" to="/">Inicio</router-link>
				<router-link class="navbar__link" to="/about">Hoy</router-link>
				<span class="navbar__link navbar__popover" @click="triggerCreate"
					>Crear <i class="fa-solid fa-chevron-down"></i>
					<Popover
						:show="showCreate"
						:position="createPosition"
						:has-header="false"
						:has-footer="false"
						class="create__popover"
					>
						<template v-slot:body>
							<div class="create__container">
								<div class="create__option">Crear un Idea Pin</div>
								<div class="create__option">Crear Pin</div>
							</div>
						</template>
					</Popover>
				</span>
			</section>
			<section class="navbar__searcher">
				<div id="navbar__searcher" class="navbar__searcher-input">
					<input id="searcher__input" class="searcher__input" placeholder="Buscar" />
					<i class="searcher__icon fas fa-search"></i>
				</div>
			</section>
			<section class="navbar__items">
				<a class="navbar__icon" @click="triggerNotifications()">
					<i class="fas fa-bell">
						<span class="navbar__notifications">1</span>
					</i>
					<Popover
						:show="showNotifications"
						:position="notificationPosition"
						:has-header="false"
						:has-footer="false"
						class="notification__popover"
					>
						<template v-slot:body>
							<div class="notifications-title">
								<span>Actualizaciones</span>
							</div>
							<div class="notifications">
								<div
									v-for="(notification, index) in notifications"
									:key="index"
									class="notification__item"
								>
									<span v-html="notification.html" />
									<div class="notification__image">
										<img
											v-for="(source, imgIndex) in notification.img"
											:key="imgIndex"
											:src="source"
										/>
									</div>
								</div>
							</div>
						</template>
					</Popover>
				</a>
				<a class="navbar__icon" @click="triggerInbox()">
					<i class="fas fa-comment-dots"></i>
					<Popover
						:show="showInbox"
						:position="inboxPosition"
						:has-header="false"
						:has-footer="false"
						class="inbox__popover"
					>
						<template v-slot:body>
							<div class="inbox-header__content">
								<span class="inbox-title"> Bandeja de entrada </span>
								<i class="fas fa-three-dots"></i>
							</div>
							<div class="inbox">
								<section class="inbox__new-message">
									<div class="inbox__new-message-icon">
										<i class="fa-solid fa-pencil"></i>
									</div>
									<span class="inbox__new-message-text">Mensaje nuevo </span>
								</section>
								<section class="inbox__messages">
									<span class="inbox__section-title">Mensajes</span>
									<div v-for="(message, index) in inbox.messages" :key="index" class="inbox__row">
										<div class="inbox__image">
											<img :src="message.profilePhoto" alt="" />
										</div>
										<div class="inbox__info">
											<span class="inbox__name">{{ message.name }}</span>
											<span class="inbox__message"
												>{{ reduceMessage(message.message) }} °
												{{ addWeekdays(message.date) }} sem</span
											>
										</div>
									</div>
								</section>
								<section class="inbox__suggestions">
									<span class="inbox__section-title">Sugerencias</span>
									<div
										v-for="(suggestion, index) in inbox.suggestions"
										:key="index"
										class="inbox__row"
									>
										<div class="inbox__image">
											<img :src="suggestion.profilePhoto" alt="" />
										</div>
										<div class="inbox__info">
											<span class="inbox__name">{{ suggestion.name }}</span>
											<span class="inbox__isFollowed">{{
												suggestion ? "Seguido" : "Sugerido"
											}}</span>
										</div>
									</div>
								</section>
							</div>
						</template>
					</Popover>
				</a>
				<a class="navbar__icon">
					<i class="fas fa-user"></i>
				</a>
				<a class="navbar__icon navbar__icon--small user__popover" @click="triggerMoreOptions()">
					<i class="fas fa-chevron-down"></i>
					<Popover
						:show="showMoreOptions"
						:position="moreOptionsPosition"
						:has-header="false"
						:has-footer="false"
					>
						<template v-slot:body>
							<div class="user__container">
								<section class="user__section">
									<span>Actualmente en</span>
									<div class="user__option user__info">
										<div class="user__image">
											<img :src="user.image" alt="" />
										</div>
										<div class="user__data">
											<span class="user__name"> {{ user.username }} </span>
											<span class="user__account-type"> {{ user.accountType }} </span>
											<span class="user__email"> {{ user.email }} </span>
										</div>
									</div>
								</section>
								<section class="user__section">
									<span>Tus cuentas</span>
									<div class="user__option">Agregar cuenta</div>
									<div class="user__option">Convertir en cuenta profesional</div>
								</section>
								<section class="user__section">
									<span>Más opciones</span>
									<div class="user__option">Configuración</div>
									<div class="user__option">Mejora tu feed de inicio</div>
									<div class="user__option">Instalar la aplicación de Windows</div>
									<div class="user__option">Tus derechos de privacidad</div>
									<div class="user__option">
										<span> Obtener ayuda </span>
										<i class="fa-solid fa-arrow-right-to-bracket"></i>
									</div>
									<div class="user__option">
										<span> Ver condiciones de servicio </span>
										<i class="fa-solid fa-arrow-right-to-bracket"></i>
									</div>
									<div class="user__option">
										<span> Ver política de privacidad </span>
										<i class="fa-solid fa-arrow-right-to-bracket"></i>
									</div>
									<div class="user__option">
										<span> Sé un evaluador beta </span>
										<i class="fa-solid fa-arrow-right-to-bracket"></i>
									</div>
									<div class="user__option">Salir</div>
								</section>
							</div>
						</template>
					</Popover>
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
import Popover from "../popover.vue";
import { Position } from "@/definitions/common/position";
import { NOTIFICATIONS } from "@/constants/back/notifications";
import { Notifications } from "@/definitions/feed/Notifications";
import { INBOX } from "@/constants/back/inbox";
import { Inbox } from "@/definitions/feed/inbox";
import { USER_INFO } from "@/constants/back/userInfo";
import { User } from "@/definitions/common/user";

import moment from "moment";

@Component({
	name: "NavBar",
	components: {
		PopoverSection,
		PopoverCategory,
		Popover,
	},
})
export default class NavBar extends Vue {
	isRecommended = false as boolean;
	searcherData = {} as NavModel;
	showNotifications = false as boolean;
	showInbox = false as boolean;
	showCreate = false as boolean;
	showMoreOptions = false as boolean;
	notifications = [] as Array<Notifications>;
	inbox = {} as Inbox;
	user = {} as User;

	notificationPosition = { top: "60", left: "-210" } as Position;
	inboxPosition = { top: "60", left: "-260" } as Position;
	moreOptionsPosition = { top: "40", left: "-330" } as Position;
	createPosition = { top: "60", left: "150" } as Position;

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
	triggerCreate() {
		this.showCreate = !this.showCreate;
		this.showInbox = false;
		this.showMoreOptions = false;
		this.showNotifications = false;
	}
	triggerNotifications() {
		this.showNotifications = !this.showNotifications;
		this.showInbox = false;
		this.showMoreOptions = false;
		this.showCreate = false;
	}
	triggerInbox() {
		this.showInbox = !this.showInbox;
		this.showNotifications = false;
		this.showMoreOptions = false;
		this.showCreate = false;
	}
	triggerMoreOptions() {
		this.showMoreOptions = !this.showMoreOptions;
		this.showNotifications = false;
		this.showInbox = false;
		this.showCreate = false;
	}
	reduceMessage(message: string) {
		return message.slice(0, 16) + "...";
	}
	addWeekdays(date: string) {
		let day = moment(date); // use a clone
		let today = moment(Date.now());
		let diffDays = day.diff(today, "days");

		while (diffDays > 0) {
			day = day.add(1, "days");
			// decrease "days" only if it's a weekday.
			if (day.isoWeekday() !== 6 && day.isoWeekday() !== 7) {
				diffDays -= 1;
			}
		}
		return diffDays * -1;
	}

	mounted() {
		const searcher = document.getElementById("navbar__searcher") || new Node();
		const input = document.getElementById("searcher__input") || new HTMLInputElement();
		const overlay = document.getElementById("searcher__overlay") || new Node();
		this.notifications.push(...NOTIFICATIONS);
		this.inbox = INBOX;
		this.user = USER_INFO;

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
