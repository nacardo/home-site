// import type { LayoutServerLoad } from './$types';
// import { createClient } from 'redis';

// export const load = (async () => {
// 	return {};
// }) satisfies LayoutServerLoad;

// // todo how to add and access .env with svelte
// const client = await createClient({
// 	username: 'nacardo',
// 	password: 'Timfrp10!',
// 	socket: {
// 		host: 'redis-13395.c321.us-east-1-2.ec2.cloud.redislabs.com',
// 		port: 13395
// 	}
// })
// 	.on('error', (err) => console.log('Redis Client Error', err))
// 	.connect();

// // try {
// // 	await client.ft.create('idx:posts', {
// // 		'$.name': {
// // 			type: SchemaFieldTypes.TEXT,
// // 			SORTABLE: true
// // 		},
// // 		'$.city': {
// // 			type: SchemaFieldTypes.TEXT,
// // 			AS: 'city'
// // 		},
// // 		'$.age': {
// // 			type: SchemaFieldTypes.NUMERIC,
// // 			AS: 'age'
// // 		}
// // 	}, {
// // 		ON: 'JSON',
// // 		PREFIX: 'user:'
// // 	});
// // } catch (e) {
// // 	if (e.message === 'Index already exists') {
// // 		console.log('Index exists already, skipped creation.');
// // 	} else {
// // 		// Something went wrong, perhaps RediSearch isn't installed...
// // 		console.error(e);
// // 		process.exit(1);
// // 	}
// // }

// const posts = await client.ft.search(
// 	'idx:posts',
// 	'*'
// 	// '@mainAuthor:{Paige}',
// 	// { RETURN: ['$.author', 'title']}
// );

// // todo figure out how to pass this data to the main page
// console.log(JSON.stringify(posts, null, 2));

// // todo filter results when one of the tabs up top is selected (baking, pa, etc..)
// client.disconnect();
