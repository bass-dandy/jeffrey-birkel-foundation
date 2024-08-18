<script lang="ts">
	import AnchorSection from '$lib/anchor-section.svelte';
	import TableOfContents from '$lib/table-of-contents.svelte';
	import SocialShare from '$lib/social-share.svelte';
	import sections from '$lib/sections.json';
</script>

<main>
	<div class="banner">
		<img src="construction.gif" alt="" />
		<h1>Jeffrey Birkel Foundation</h1>
		<img src="construction.gif" alt="" />
	</div>

	<div class="column-layout">
		<div class="sidebar">
			<TableOfContents />
			<SocialShare />
		</div>
		<div class="main-content">
			{#each Object.entries(sections) as [id, section]}
				<AnchorSection id={id} title={section.title} body={section.body} />
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		padding: 64px 32px;
	}

	.column-layout {
		display: flex;
		position: relative;
		gap: 24px;
		margin-top: 24px;
		align-items: flex-start;
	}

	.sidebar {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.main-content {
		flex: 1;
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
