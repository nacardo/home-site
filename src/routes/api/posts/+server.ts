import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import db from '$lib/database';

export const GET: RequestHandler = async () => {
	const posts = await db.post.findMany();
	const options: ResponseInit = {
		status: 200,
		headers: {
			'Cache-Control': 'max-age=60'
		}
	};
	return json(posts, options);
};

export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const title = data.get('title');
	const content = data.get('content');
	const author = data.get('author');
	const topics = data.get('topics');

	console.log(title, content, author, topics);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
