<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let title: any;
	export let content: any;
	export let author: any;
	export let createdAt: any;
	export let topics: any;
</script>

<a href="/" class="card p-4 w-full">
	<!-- <header>
		<img
			src={'https://images.unsplash.com/photo-1620562303747-ba21ca6f1530?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MjR8&ixlib=rb-4.0.3&w=400&h=100&auto=format&fit=crop'}
			class="bg-black/50 w-full aspect-[21/9]"
			alt="Post"
		/>
	</header> -->
	<div class="p-4 space-y-4">
		<!-- <h6 class="h6" data-toc-ignore>{title}</h6> -->
		<h3 class="h3" data-toc-ignore>{title}</h3>
		<article>
			<p>
				{content}
			</p>
		</article>
	</div>
	<hr class="opacity-50" />
	<footer class="p-4 flex justify-start items-center space-x-4">
		<Avatar
			src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3"
			width="w-8"
		/>
		<div class="flex-auto flex justify-between items-center">
			<h6 class="font-bold" data-toc-ignore>{author}</h6>
			<small>On {new Date().toLocaleDateString()}</small>
		</div>
	</footer></a
>
