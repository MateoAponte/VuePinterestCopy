import { positions, popoverTypes } from "@/constants/feed/home/dictionary";
import { Position } from "@/definitions/common/position";

function getElementById(id: string) {
	return new Promise((res) => {
		setTimeout(() => {
			const elementById = document.getElementById(id);
			res(elementById);
		}, 1);
	});
}

export async function recalculateSelectBoard(value: Position, father: string, elements: string) {
	const selectBoard = document.querySelectorAll<HTMLElement>(elements)[0];
	const element = await getElementById(father);

	const height = element?.offsetHeight || 0;
	const width = element?.offsetWidth || 0;

	let realTop = Number(value.top) - positions[popoverTypes.BOARD].top;
	let realLeft = Number(value.left) - width / 2;

	// Get All the distance of the view
	const windowHeight = window.innerHeight + window.pageYOffset;

	// Get the distance from top of the view and the height of the relative component
	const elementTop = Number(value.top) + height;
	// Get the distance from top of the view and the height of the relative component and divide that to get the half
	const halfElementTop = Number(value.top) + height / 2;
	if (elementTop > windowHeight) {
		if (halfElementTop > windowHeight) {
			realTop =
				Number(value.top) -
				height -
				selectBoard?.offsetHeight -
				positions[popoverTypes.BOARD].bottom;
			realLeft = Number(value.left) - width / 2;
			console.log("The half of element is bigger than window");
		} else {
			realTop = Number(value.top) - height / 2 - positions[popoverTypes.BOARD].top;
			realLeft =
				Number(value.left) - width - selectBoard?.offsetWidth + positions[popoverTypes.BOARD].left;
			console.log("Element is placement in the left");
		}
	}

	if (realLeft < 0) {
		realLeft = Number(value.left) + 0;
	}

	return { top: String(realTop), left: String(realLeft) };
}

export async function recalculate(
	value: Position,
	father: string,
	elements: string,
	type: popoverTypes,
) {
	const selectBoard = document.querySelectorAll<HTMLElement>(elements)[0];
	const element = await getElementById(father);

	// Height and Width of the relative component
	const height = element?.offsetHeight || 0;
	const width = element?.offsetWidth || 0;

	// Relative positions to initial placement of the popovers
	let realTop = Number(value.top) - positions[type].top;
	let realLeft = Number(value.left) - positions[type].left / 2;

	// Get All the distance of the view
	const windowHeight = window.innerHeight + window.pageYOffset;
	const windowWidth = window.innerWidth + window.pageXOffset;

	// Get the distance from top of the view and the height of the relative component
	const elementTop = Number(value.top) + height + selectBoard?.offsetHeight;
	const elementLeft = Number(value.left) + width;
	// Get the distance from top of the view and the height of the relative component and divide that to get the half
	const halfElementTop = selectBoard?.offsetHeight + Number(value.top) + height / 2;
	const overflowLeft = Number(value.left) - width - positions[popoverTypes.BOARD].left;

	if (elementTop > windowHeight) {
		if (halfElementTop > windowHeight) {
			if (overflowLeft < 0) {
				realLeft = Number(value.left) + width / 2 - selectBoard?.offsetWidth;
			} else {
				realLeft = Number(value.left) - width / 2 + selectBoard?.offsetWidth / 2;
			}
			realTop = Number(value.top) - height;
		} else {
			if (overflowLeft < 0) {
				realLeft =
					Number(value.left) +
					width -
					selectBoard?.offsetWidth +
					positions[popoverTypes.BOARD].left;
			} else {
				realLeft = Number(value.left) - positions[type].left;
				realLeft = type === popoverTypes.SHARED ? realLeft - width / 3 : realLeft - width / 2;
			}
			realTop = Number(value.top) - height / 2 - positions[type].top;
		}
	}

	if (elementLeft > windowWidth) {
		realLeft = Number(value.left) - width / 2 - positions[type].left;
	}

	return { top: String(realTop), left: String(realLeft) };
}
