import type { RequestHandler } from '../$types';
import { json } from '@sveltejs/kit';
// import client from '$lib/redis';

export const GET: RequestHandler = async (event) => {
	const posts: Promise<Response> = await fetch('https://dummyjson.com/posts').then((res) =>
		res.json()
	);
	// console.log('in get');
	// const data = (await client).ft.search('idx:posts', '*');
	// if (!data) {
	// 	console.log('bad');
	// 	return new Response('bad bad bad', { status: 404 });
	// }
	// // normalize data
	// const posts = Object.keys(data).map((key) => ({
	// 	id: key,
	// 	title: data[key]['title'],
	// 	content: data[key]['content']
	// }));
	// console.log('still here?');
	// event.setHeaders({
	// 	'Cache-Control': 'max-age=60'
	// });
	const options: ResponseInit = {
		status: 200,
		headers: {
			'Cache-Control': 'max-age=60'
		}
	};
	// // return { body: { posts } };
	return json(posts, options);
	// return new Response('hello', options);
};

// export const POST: RequestHandler = async () => {

// }
