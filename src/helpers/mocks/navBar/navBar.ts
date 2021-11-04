import { NavModel } from "@/definitions/NavModel";

const mockNavbar = {
	recentSearchs: [
		{
			name: "Bioshock",
			date: new Date(),
		},
		{
			name: "Hollow Knight",
			date: new Date(),
		},
		{
			name: "Borderlands",
			date: new Date(),
		},
		{
			name: "Castlevania Wallpaper",
			date: new Date(),
		},
	],
	userFeed: {
		title: "Ideas para ti",
		recommendation: [
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
		],
	},
	popularFeed: {
		title: "Populares en TikTok",
		recommendation: [
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
		],
	},
	specialFeed: {
		title: "Moda para Frikis",
		recommendation: [
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
			{
				name: "Idea",
				img: "https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png",
			},
		],
	},
};

export default mockNavbar as NavModel;
