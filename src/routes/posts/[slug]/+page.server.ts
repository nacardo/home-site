import type { PageServerLoad } from './$types';
import db from '$lib/database';

export const load: PageServerLoad = async ({ params }) => {
	const post = await db.post.findMany({
		where: {
			id: Number(params.slug)
		}
	});
	return post;
};
