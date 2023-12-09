import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	const response = await fetch(`https://dummyjson.com/posts/${params.slug}`);
	const post = await response.json();
	return post;
}) satisfies PageServerLoad;
