<script lang="ts">
	import { onMount } from 'svelte';
	import PostCard from '../PostCard.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	// $: ({ posts } = data);
	let value: string = '';
	const placeholders = [
		'PA school ...',
		'sour dough ...',
		'photography ...',
		'baking ...',
		'Italy ...',
		'travel ...',
		'ICU ...'
	];
	let currentIndex = 0;
	let currentPlaceholder = placeholders[currentIndex];

	function iteratePlaceholders() {
		setInterval(() => {
			currentIndex = (currentIndex + 1) % placeholders.length;
			currentPlaceholder = placeholders[currentIndex];
		}, 4000);
	}

	async function getPosts() {
		const response = await fetch('/posts');
		const posts = await response.json();
		return posts.posts;
	}

	onMount(() => {
		iteratePlaceholders();
	});
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h2 class="h2">Hi! I'm Paige.</h2>
		<p class="h3">
			This is a place where I write and post about anything and everything, but mostly Travel,
			Baking, and my journey as a Physician Assistant.
		</p>
		<input
			class="input sm:w-1/2 md:3/4"
			title="Search Posts"
			type="text"
			placeholder={currentPlaceholder}
			bind:value
		/>
		<div class="space-y-4 text-start flex flex-col items-start w-full md:w-3/4 lg:w-1/2">
			<h3 class="h3 space-y-4 underline">Read my posts below:</h3>
			<!-- {#await getPosts()}
				Loading posts...
			{:then posts} -->
			{#each data.posts as { id, value: { title, content, author, topics } }}
				<PostCard
					slug={`/posts/${id}`}
					{title}
					{content}
					author={author[0]}
					createdAt="now"
					topics={topics[0]}
				/>
			{/each}
			<!-- {:catch error}
				<p>{error.message}</p>
			{/await} -->
			<!-- {#if data}
				{#each data.posts as post}
					<PostCard title={post.title} body={post.body} userId={post.userId} />
				{/each}
			{/if} -->
		</div>
	</div>
</div>
