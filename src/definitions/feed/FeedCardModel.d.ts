type User = {
	image: string;
	name: string;
};

type Reaction = {
	userOrigin: string;
	typeReaction: ReactionType;
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
