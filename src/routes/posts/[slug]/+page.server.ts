import type { PageServerLoad } from './$types';
import client from '$lib/redis';

export const load: PageServerLoad = async ({ params }) => {
	// const response = await fetch('/posts');
	// const posts = await response.json();
	// return posts;
	client.connect();
	const post = await client.json.get(params.slug);
	// client.disconnect();
	await client.quit();
	return post;
};
