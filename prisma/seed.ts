type User = {
	id: number;
	email: string;
	author: Author | null;
	posts: Array<Post>;
};

type Author = {
	id: number;
	name: string | null;
	user: User;
	userId: number;
};

type Post = {
	id: string;
	author: Author;
	authorId: number;
	title: string;
	content: string;
	categories: Array<Category>;
	createdAt: Date;
	updatedAt: Date;
};

type Category = {
	id: number;
	tag: string;
	posts: Array<Post>;
};

type Shot = {
	id: number;
	name: string;
	grindAmount: number;
	preTime: number;
	extractionTime: number;
	espressoYield: number;
	rating: string;
	yieldRatio: number;
	yieldRate: number;
};
