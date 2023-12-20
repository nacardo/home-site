import type { PageLoad } from './$types';
import type { Post } from '@prisma/client';

export const load = (async () => {
	const response = await fetch('/route/posts');

	const posts: Post[] = await response.json();

	return { posts };
}) satisfies PageLoad;
