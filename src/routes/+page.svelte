<script lang="ts">
	import { onMount } from 'svelte';
	import PostCard from '../PostCard.svelte';
	export let data;
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
		<div class="space-y-4 text-start flex flex-col items-start">
			<h3 class="h3 space-y-4 underline">Read my posts below:</h3>
			{#if data}
				{#each data.posts.documents as post}
					<PostCard
						title={post.value.title}
						content={post.value.content}
						author={post.value.author}
						createdAt={post.value.createdAt}
						topics={post.value.topics}
					/>
				{/each}
			{/if}
		</div>
	</div>
</div>
