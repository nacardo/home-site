<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar, LightSwitch, Modal, popup } from '@skeletonlabs/skeleton';
	import { initializeStores } from '@skeletonlabs/skeleton';

	// Lightswitch for toggling between light and dark mode
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	initializeStores();
</script>

<Modal />
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar class="mb-5">
			<svelte:fragment slot="lead">
				<a href="/">
					<strong class="text-xl uppercase">Paige's Place 😋 </strong>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<!-- Explore -->
				<div class="relative lg:hidden">
					<!-- trigger -->
					<button
						class="btn hover:variant-soft-primary"
						use:popup={{ event: 'click', target: 'features' }}
					>
						<span>Explore</span>
						<i class="fa-solid fa-caret-down opacity-50" />
					</button>
					<!-- popup -->
					<div class="card p-4 w-60 shadow-xl" data-popup="features">
						<nav class="list-nav">
							<ul>
								<li>
									<a href="/">
										<span class="w-6 text-center"><i class="fa-solid fa-home" /></span>
										<span>Homepage</span>
									</a>
								</li>
								<li>
									<a href="/baking">
										<span class="w-6 text-center"><i class="fa-solid fa-book" /></span>
										<span>Baking</span>
									</a>
								</li>
								<li>
									<a href="/espresso">
										<span class="w-6 text-center"><i class="fa-solid fa-book" /></span>
										<span>Espresso</span>
									</a>
								</li>
								<li>
									<a href="/travel">
										<span class="w-6 text-center"><i class="fa-solid fa-bullhorn" /></span>
										<span>Travel</span>
									</a>
								</li>
								<li>
									<a href="/Physician Assistant">
										<span class="w-6 text-center"><i class="fa-solid fa-bullhorn" /></span>
										<span>Physician Assistant</span>
									</a>
								</li>
							</ul>
						</nav>
						<!-- <div class="arrow bg-surface-100-800-token" /> -->
					</div>
				</div>
				<div class="hidden lg:block">
					<a class="btn btn-sm variant-ghost-surface" href="/espresso" rel="noreferrer">
						Espresso
					</a>
					<a class="btn btn-sm variant-ghost-surface" href="/baking" rel="noreferrer"> Baking </a>
					<a class="btn btn-sm variant-ghost-surface" href="/pa" rel="noreferrer"> PA </a>
					<a class="btn btn-sm variant-ghost-surface" href="/travel" rel="noreferrer"> Travel </a>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
