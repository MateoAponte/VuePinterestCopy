type Messages = {
	profilePhoto: string;
	message: string;
	date: string;
	name: string;
};

type Suggestions = {
	isFollowed: boolean;
	profilePhoto: string;
	name: string;
};

export type Inbox = {
	messages: Array<Messages>;
	suggestions: Array<Suggestions>;
};
