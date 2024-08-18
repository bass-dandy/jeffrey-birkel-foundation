<script lang="ts">
	import AnchorSection from '$lib/anchor-section.svelte';
	import TableOfContents from '$lib/table-of-contents.svelte';
	import SocialShare from '$lib/social-share.svelte';
	import sections from '$lib/sections.json';
</script>

<main>
	<div class="banner">
		<img src="banner.jpg" alt="" />
		<div class="banner-text">
			<h1>Jeffrey Birkel Foundation</h1>
		</div>
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
	.banner {
		position: relative;
	}

	.banner img {
		width: 100%;
	}

	.banner-text {
		position: absolute;
		background: rgba(0, 0, 0, 0.75);
		top: 16px;
		left: 32px;
		padding: 4px 16px;
	}

	.banner h1 {
		color: white;
		margin: 0;
		padding: 0;
	}

	.column-layout {
		display: flex;
		position: relative;
		gap: 32px;
		padding:  32px 32px 64px;
		margin-top: 24px;
		align-items: flex-start;
		background: white;
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
</style>
