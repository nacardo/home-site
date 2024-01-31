import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import db from '$lib/database';

export const GET: RequestHandler = async () => {
	const shots = await db.shot.findMany();
	const options: ResponseInit = {
		status: 200,
		headers: {
			'Cache-Control': 'max-age=60'
		}
	};
	return json(shots, options);
};

// todo add POST method
