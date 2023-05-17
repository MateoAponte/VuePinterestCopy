type User = {
	image: string;
	name: string;
};

type ImageData = {
	previewWidth: number;
	previewHeight: number;
	imageWidth: number;
	imageHeight: number;
};

export type FeedCardModel = {
	id: number;
	path: string;
	title: string;
	originPage: string;
	user: User;
	imageData: ImageData;
	tags: Array<string>;
	reactions: number;
};
