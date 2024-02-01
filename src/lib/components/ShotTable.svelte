<script lang="ts">
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
	import type { Shot } from '@prisma/client';

	export let sourceData;
	let tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Grind Amount', 'Pre Time', 'Extraction Time', 'Rating'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['grindAmount', 'preTime', 'extractionTime', 'rating']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, [
			'id',
			'brewDate',
			'brewerName',
			'grindAmount',
			'preTime',
			'extractionTime',
			'espressoYield',
			'yieldRatio',
			'yieldRate',
			'rating'
		])
		// Optional: A list of footer labels.
		// foot: ['Total', '', `<code class="code">${sourceData.length}</code>`]
	};

	// function setTableSource(): TableSource {
	// 	return {
	// 		// A list of heading labels.
	// 		head: ['Grind Amount', 'Pre Time', 'Extraction Time', 'Rating'],
	// 		// The data visibly shown in your table body UI.
	// 		body: tableMapperValues(sourceData, ['grindAmount', 'preTime', 'extractionTime', 'rating']),
	// 		// Optional: The data returned when interactive is enabled and a row is clicked.
	// 		meta: tableMapperValues(sourceData, [
	// 			'id',
	// 			'brewDate',
	// 			'brewerName',
	// 			'grindAmount',
	// 			'preTime',
	// 			'extractionTime',
	// 			'espressoYield',
	// 			'yieldRatio',
	// 			'yieldRate',
	// 			'rating'
	// 		])
	// 		// Optional: A list of footer labels.
	// 		// foot: ['Total', '', `<code class="code">${sourceData.length}</code>`]
	// 	};
	// }

	// // If sourceData updates, set the new TableSource values
	// $: tableSimple = sourceData ? setTableSource() : tableSimple;

	// On row selection
	function onSelected(meta: unknown): void {
		// todo figure out what type meta should be or if it should stay as unknown
		// todo make this show a popup with all the data from the shot
		// todo map the values of the detail to the shot type
		// const shotInfo: Shot = meta.detail
		console.log('on:selected', meta);
	}
</script>

<Table class="text-center" source={tableSimple} interactive={true} on:selected={onSelected} />
