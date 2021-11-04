export type BoardModel = {
	id: number | null;
	image: string | null;
	name: string;
	isSuggestion: boolean;
	isPrivate: boolean;
	total: number;
	lastEdition: Date;
	tags: Array<string>;
};
