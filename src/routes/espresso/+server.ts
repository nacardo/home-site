// import type { RequestHandler } from './$types';
// import db from '$lib/database'

// export const GET: RequestHandler = async () => {
// 	const shots = await db.shot.findMany({
// 		where: {
// 			id: Number(params.slug)
// 		}
// 	});
// 	return post;
// 	return new Response();
// };

// export const POST: RequestHandler = async (event) => {
// 	const data = await event.request.formData();
// 	const title = data.get('title');
// 	const content = data.get('content');
// 	const author = data.get('author');
// 	const topics = data.get('topics');

// 	console.log(title, content, author, topics);

// 	return new Response(JSON.stringify({ success: true }), {
// 		headers: {
// 			'Content-Type': 'application/json'
// 		}
// 	});
// };

