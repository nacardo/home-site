<script lang="ts">
	import type { PageData } from './$types';
	import Stopwatch from '$lib/components/Stopwatch.svelte';

	export let data: PageData;
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<Stopwatch />
	</div>
</div>
<div class="space-y-4 text-start flex flex-col items-start w-full md:w-3/4 lg:w-1/2">
	<h3 class="h3 space-y-4 underline">Check out previous shots:</h3>
	<p>Showing {data.shots.length} shots.</p>
	{#each data.shots as shot}
		<p>{shot.preTime}</p>
		<!-- <PostCard
			slug={`/shots/${post.id}`}
			title={post.title}
			content={post.content}
			author={post.authorId}
			createdAt={post.createdAt}
			topics={'null'}
		/> -->
	{/each}
</div>