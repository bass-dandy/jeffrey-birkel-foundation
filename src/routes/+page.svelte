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
	main {
		padding-bottom: 64px;
	}

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
		flex-direction: column;
		align-items: flex-start;
		position: relative;
		gap: 32px;
		background: white;
	}

	.sidebar {
		display: flex;
		gap: 16px;
		position: sticky;
		top: 0;
		width: 100%;
		justify-content: space-between;
		background: white;
		box-sizing: border-box;
		padding: 8px 32px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}

	.main-content {
		flex: 1;
		padding: 0 32px;
	}

	@media (min-width:751px) {
		.column-layout {
			flex-direction: row;
			padding-top: 24px;
		}

		.sidebar {
			flex-direction: column;
			justify-content: flex-start;
			width: auto;
			padding: 0 0 0 32px;
			box-shadow: none;
		}

		.main-content {
			padding: 0 32px 0 0;
		}
	}
</style>
