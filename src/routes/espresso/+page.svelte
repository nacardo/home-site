<script lang="ts">
	import type { PageData } from './$types';
	import Stopwatch from '$lib/components/Stopwatch.svelte';
	import ShotTable from '$lib/components/ShotTable.svelte';

	export let data: PageData;
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<Stopwatch />
	</div>
	<div class="mt-10 pt-20 pb-10 space-y-4 w-full md:w-3/4 lg:w-1/2">
		<h3 class="h3 space-y-4 underline">Check out previous shots:</h3>
		<ShotTable sourceData={data.shots} />
	</div>
</div>
