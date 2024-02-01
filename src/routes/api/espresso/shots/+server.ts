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
export async function POST({ request }) {
	const shotData = await request.json();
	const submitShot = await db.shot.create({
		data: shotData
	});
	// const userid = cookies.get('userid');
	// const { id } = await db.shot.create({ userid, description });

	return json({ submitShot }, { status: 201 });
}
