import type { PageServerLoad } from './$types';
import type { Post } from '@prisma/client';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api/posts');

	const posts: Post[] = await response.json();

	return { posts };
};
