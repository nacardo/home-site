import { createClient } from 'redis';
import { REDIS_USERNAME, REDIS_PASSWORD, REDIS_HOST, REDIS_PORT } from '$env/static/private';

const client = createClient({
	username: REDIS_USERNAME,
	password: REDIS_PASSWORD,
	socket: {
		host: REDIS_HOST,
		port: Number(REDIS_PORT)
	}
});

export default client;
