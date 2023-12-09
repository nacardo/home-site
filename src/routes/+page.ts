import type { PageLoad } from './$types';
export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/posts');
	const posts = await response.json();
	return posts;
};
// import client from "$lib/redis";

// export function load() {
//    client.connect()
//    const data = await client.ft.search(
//     'idx:posts',
//     '*');
// }

// // todo onChange of search input run client.ft.search

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
