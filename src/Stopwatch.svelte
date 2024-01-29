<script lang="ts">
	// todo create pre and extraction indicators
	// todo create progress bar
	import { onMount, onDestroy } from 'svelte';
	import type { ModalSettings } from '@skeletonlabs/skeleton';

	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	let grindAmount: number;

	let isRunning: boolean = false;
	let isExtracting: boolean = false;
	let isBrewed: boolean = false;
	let preTime: number = 0;
	let extractionTime: number = 0;
	$: totalTime = preTime + extractionTime;
	// $: idealYield = extractionTime * 1.8;
	$: showSave = extractionTime > 0 && isBrewed;
	let coffeeYield: number = 0;

	let interval: NodeJS.Timeout;
	// $: interval ? console.log(interval) : null;

	const modal: ModalSettings = {
		type: 'prompt',
		// Data
		title: 'Coffee Yield',
		body: 'Enter the amount of coffee yielded in grams.',
		// Populates the input value and attributes
		valueAttr: {
			placeholder: 'grams',
			type: 'number',
			minlength: 1,
			maxlength: 3,
			required: true
		},
		// Returns the updated response value
		response: (r: string) => console.log('response:', r)
	};

	function start() {
		isRunning = true;
		interval = setInterval(() => {
			if (!isExtracting) {
				preTime += 0.01; // Update every 10 milliseconds (adjust as needed)
			} else {
				extractionTime += 0.01;
			}
		}, 10);
	}

	function stop() {
		isRunning = false;
		isExtracting = false;
		if (extractionTime > 0) {
			isBrewed = true;
		}
		clearInterval(interval);
	}

	function reset() {
		stop();
		preTime = 0;
		extractionTime = 0;
	}

	function save() {
		modalStore.trigger(modal);
		// save the brew details to db
	}

	// onMount(() => {
	// 	// Cleanup interval on component destroy
	// 	onDestroy(() => {
	// 		clearInterval(interval);
	// 	});
	// });
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="stopwatch">
	<div class="grid grid-cols-3">
		<div class="grid col-span-1 text-start font-mono">
			<p class="text-3xl md:text-5xl font-semibold">{preTime.toFixed(2)}s</p>
		</div>
		<div class="grid col-start-3 col-span-1 font-mono">
			<p class="text-3xl md:text-5xl font-semibold">{extractionTime.toFixed(2)}s</p>
		</div>
	</div>
	<form class="flex flex-col mt-4 space-y-4">
		<div>
			<!-- <button class="btn variant-outline-primary w-full">
				<div class="flex flex-row">
					<p class="flex justify-start">Pre</p>
					<p>Extraction</p>
				</div>
			</button> -->
			<div class="flex flex-row justify-between mt-2 py-3 rounded-full variant-outline-primary">
				<p class="flex pl-3">Pre</p>
				<p class="flex">→</p>
				<p class="flex justify-end pr-3">extraction</p>
				<!-- <input type="text" placeholder="Enter Username..." /> -->
				<!-- <button class="">Extraction</button> -->
			</div>
		</div>
		<!-- <span>Street</span> -->
		<label class="label">
			<input
				class="input w-1/2"
				type="text"
				placeholder="Grind Amount (g)"
				bind:value={grindAmount}
			/>
		</label>
		<!-- <div class="input-group input-group-divider grid-cols-[1fr_auto]">
				<div class="input-group-shim">Grind Amount</div>
				<input type="text" placeholder="Grind Amount (g)" bind:value={grindAmount} />
				<div title="Grams of yield">g</div>
			</div> -->
		<!-- <div class="input-group input-group-divider grid-cols-2">
				<div class="input-group-shim">Ideal yield/s</div>
				<div>{idealYield.toFixed(2)}g</div>
			</div> -->
		<div class="grid grid-rows-2 grid-cols-6 gap-y-2 gap-x-1 md:gap-y-4 md:gap-x-5">
			<button
				class="btn variant-filled-primary col-span-2"
				on:click={start}
				disabled={isRunning || preTime != 0}>Start</button
			>
			<button
				class="btn variant-filled-primary col-span-2"
				on:click={() => (isExtracting = true)}
				disabled={!isRunning || isExtracting}>→ Extraction</button
			>
			<button class="btn variant-filled-primary col-span-2" on:click={stop} disabled={!isRunning}
				>Stop</button
			>
			<button class="btn variant-filled-primary col-span-3" on:click={reset}>Reset</button>
			<button class="btn variant-filled-primary col-span-3" on:click={save} disabled={!showSave}
				>Save</button
			>
		</div>
	</form>
	<!-- <button class="btn variant-filled-primary mt-4" on:click={isRunning ? stop : start}
		>{isRunning ? 'Stop' : 'Start'}</button
	> -->

	<!-- {#if laps.length > 0}
		<ul>
			{#each laps as lap, index (index)}
				<li>Lap {index + 1}: {lap.toFixed(2)}s</li>
			{/each}
		</ul>
	{/if} -->
</div>

<style>
	.stopwatch {
		font-size: 24px;
		text-align: center;
		margin: 20px;
	}
</style>
