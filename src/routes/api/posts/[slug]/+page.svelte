<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	$: ({ title, author, content } = data);
</script>

<div class="container h-full mt-20 mx-auto flex justify-center">
	<div class="space-y-10 flex flex-col md:w-3/4 lg:w-1/2">
		{#if !title}
			Post not found.
		{:else}
			<h2 class="h2">{title}</h2>
			<h3 class="h3">Author: {author}</h3>

			<div>{@html content}</div>
		{/if}
	</div>
</div>
