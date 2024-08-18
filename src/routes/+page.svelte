<script lang="ts">
	import TableOfContents from '$lib/table-of-contents.svelte';
	import AnchorSection from '$lib/anchor-section.svelte';
	import sections from '$lib/sections.json';
</script>

<main>
	<div class="banner">
		<img src="construction.gif" alt="" />
		<h1>Jeffrey Birkel Foundation</h1>
		<img src="construction.gif" alt="" />
	</div>

	<TableOfContents />

	{#each Object.entries(sections) as [id, section]}
		<AnchorSection id={id} title={section.title} body={section.body} />
	{/each}
</main>

<style>
	main {
		padding: 64px 32px;
	}

	.banner {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	.banner img {
		height: 64px;
		width: auto;
	}
</style>
