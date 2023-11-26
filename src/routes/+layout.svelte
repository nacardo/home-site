<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	// Lightswitch for toggling between light and dark mode
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Paige's Place 😋 </strong></svelte:fragment
			>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<a class="btn btn-sm variant-ghost-surface" href="/travel" rel="noreferrer"> Travel </a>
				<a class="btn btn-sm variant-ghost-surface" href="/baking" rel="noreferrer"> Baking </a>
				<a class="btn btn-sm variant-ghost-surface" href="/pa" rel="noreferrer"> PA </a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
