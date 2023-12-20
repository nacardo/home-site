import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import db from '$lib/database';

export const GET: RequestHandler = async () => {
	const posts = await db.post.findMany();
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
	return json(posts, options);
};
