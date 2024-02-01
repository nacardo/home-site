<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	// Stores
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
	// Props
	/** Exposes parent props to this component. */
	export let parent: SvelteComponent;
	// export let brewerName;
	export let grindAmount;
	// export let espressoYield;
	export let preTime;
	export let extractionTime;
	// export let rating;

	// Form Data
	const formData = {
		brewerName: '',
		grindAmount: grindAmount ? Number(grindAmount) : 18,
		espressoYield: 0,
		preTime: Number(preTime.toFixed(2)),
		extractionTime: Number(extractionTime.toFixed(2)),
		rating: '',
		yieldRatio: 0,
		yieldRate: 0
	};

	// We've created a custom submit function to pass the response and close the modal.
	async function onFormSubmit(): Promise<void> {
		formData.yieldRatio = formData.espressoYield / formData.grindAmount;
		formData.yieldRate = formData.espressoYield / formData.extractionTime;

		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	// Base Classes
	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

<!-- @component This example creates a simple form modal. -->

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
			<label class="label">
				<span>Name</span>
				<input
					class="input"
					type="text"
					bind:value={formData.brewerName}
					placeholder="Enter name..."
				/>
			</label>
			<label class="label">
				<span>Grind Amount (g)</span>
				<input
					class="input"
					type="number"
					bind:value={formData.grindAmount}
					placeholder="Enter grind amount..."
				/>
			</label>
			<label class="label">
				<span>Espresso Yield (g)</span>
				<input
					class="input"
					type="number"
					bind:value={formData.espressoYield}
					placeholder="Enter espresso yield..."
				/>
			</label>
			<label class="label">
				<span>Pre-Extraction Time (s)</span>
				<input
					class="input"
					type="number"
					bind:value={formData.preTime}
					placeholder="Enter pre-extraction time..."
				/>
			</label>
			<label class="label">
				<span>Extraction Time (s)</span>
				<input
					class="input"
					type="number"
					bind:value={formData.extractionTime}
					placeholder="Enter extraction time..."
				/>
			</label>
			<label class="label">
				<span>Rating</span>
				<select class="select" bind:value={formData.rating}>
					<option value="😍">😍</option>
					<option value="🙂">🙂</option>
					<option value="😐">😐</option>
					<option value="🙁">🙁</option>
					<option value="🤢">🤢</option>
				</select>
				<!-- <input
					class="input"
					type="select"
					sele
					bind:value={formData.extractionTime}
					placeholder="How would you rate the shot?"
				/> -->
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
			<button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
			<button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Submit Form</button>
		</footer>
	</div>
{/if}
