import type { PageLoad } from './$types';
import type { Shot } from '@prisma/client';
export const load = (async ({ fetch }) => {
	const response = await fetch('/api/espresso/shots');

	const shots: Shot[] = await response.json();
	return { shots };
}) satisfies PageLoad;
