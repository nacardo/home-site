<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="container h-full mt-20 mx-auto flex justify-center">
	<div class="space-y-10 flex flex-col md:w-3/4 lg:w-1/2">
		{#if !data}
			Post not found.
		{:else}
			<h2 class="h2">{data.title}</h2>
			<h3 class="h3">Author: {data.userId}</h3>

			<div>{@html data.body}</div>
		{/if}
	</div>
</div>
