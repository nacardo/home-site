import type { PageServerLoad } from './$types';
import { createClient } from 'redis';
import { REDIS_USERNAME, REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } from '$env/static/private';

export const load = (async () => {
	const client = await createClient({
		username: REDIS_USERNAME,
		password: REDIS_PASSWORD,
		socket: {
			host: REDIS_HOST,
			port: Number(REDIS_PORT) 
		}
	})
	.on('error', (err) => console.log('Redis Client Error', err))
	.connect();	
	
	const posts = await client.ft.search(
		'idx:posts',
		'*'
		// '@mainAuthor:{Paige}',
		// { RETURN: ['$.author', 'title']}
	);

	// console.log(JSON.stringify(posts, null, 2));

	// todo filter results when one of the tabs up top is selected (baking, pa, etc..)
	client.quit();
	return { posts };
}) satisfies PageServerLoad;

// todo onChange of search input run client.ft.search





// try {
// 	await client.ft.create('idx:posts', {
// 		'$.name': {
// 			type: SchemaFieldTypes.TEXT,
// 			SORTABLE: true
// 		},
// 		'$.city': {
// 			type: SchemaFieldTypes.TEXT,
// 			AS: 'city'
// 		},
// 		'$.age': {
// 			type: SchemaFieldTypes.NUMERIC,
// 			AS: 'age'
// 		}
// 	}, {
// 		ON: 'JSON',
// 		PREFIX: 'user:'
// 	});
// } catch (e) {
// 	if (e.message === 'Index already exists') {
// 		console.log('Index exists already, skipped creation.');
// 	} else {
// 		// Something went wrong, perhaps RediSearch isn't installed...
// 		console.error(e);
// 		process.exit(1);
// 	}
// }
