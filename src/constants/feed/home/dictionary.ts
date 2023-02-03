export enum events {
	HIDE_BOARD = "hideBoard",
	SHOW_BOARD = "showBoard",
	SHOW_SHARED = "showShared",
	HIDE_SHARED = "hideShared",
	SHOW_MORE_INFO = "showMoreInfo",
	HIDE_MORE_INFO = "hideMoreInfo",
}

export enum popoverTypes {
	BOARD = "board",
	SHARED = "shared",
	MORE_INFO = "more-info",
}

export const positions = {
	[popoverTypes.BOARD]: {
		top: 50,
		bottom: 80,
		left: 20,
	},
	[popoverTypes.SHARED]: {
		top: -48,
		bottom: 80,
		left: 190,
	},
	[popoverTypes.MORE_INFO]: {
		top: -48,
		bottom: 80,
		left: 80,
	},
};
