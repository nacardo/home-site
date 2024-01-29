<script lang="ts">
	import type { PageData } from './$types';

	async function createPost(event: Event) {
		const form = event.target as HTMLFormElement;
		const data = new FormData(form);

		await fetch('/api/posts/', {
			method: 'POST',
			body: data
		});
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<form
		class="flex flex-col text-center space-y-6 w-full md:w-3/4 lg:w-1/2"
		on:submit|preventDefault={createPost}
	>
		<label for="title" class="label">
			<span>Title</span>
			<input class="input" type="text" id="title" name="title" />
		</label>
		<!-- // TODO: get authorId from session -->
		<label for="author" class="label">
			<span>Author</span>
			<input class="input" type="text" id="author" name="author" />
		</label>

		<label for="content" class="label">
			<span>Content</span>
			<textarea class="textarea" rows="20" id="content" name="content"></textarea>
		</label>
		<!-- // TODO: show chips for topics and also have an input field to search or create new topic -->
		<label for="topics" class="label">
			<span>Topics</span>
			<input class="input" type="text" id="topics" name="topics" />
		</label>

		<button class="btn variant-outline-primary flex mx-auto w-1/2" type="submit">Submit</button>
	</form>
</div>
