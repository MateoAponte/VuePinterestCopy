type RecentSearch = {
	name: string;
	date: Date;
};
type Recommendation = {
	name: string;
	img: string;
};
type FeedRecommendations = {
	title: string;
	recommendation: Array<Recommendation>;
};

export type NavModel = {
	recentSearchs: Array<RecentSearch>;
	userFeed: FeedRecommendations;
	popularFeed: FeedRecommendations;
	specialFeed: FeedRecommendations;
};
