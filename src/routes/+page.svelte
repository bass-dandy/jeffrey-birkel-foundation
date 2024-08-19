<script lang="ts">
	import AnchorSection from '$lib/anchor-section.svelte';
	import Nav from '$lib/nav.svelte';
	import sections from '$lib/sections.json';
</script>

<main>
	<div class="banner">
		<img src="banner.jpg" alt="" />
		<div class="banner-text">
			<h1>Jeffrey Birkel Foundation</h1>
		</div>
	</div>

	<div class="layout">
		<Nav />
		<div class="main-content">
			{#each Object.entries(sections) as [id, section]}
				<AnchorSection id={id} title={section.title} body={section.body} />
			{/each}
		</div>
	</div>
</main>

<style lang="scss">
	@import '../mixins.scss';

	main {
		padding-bottom: var(--spacing-xxl);
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
		top: var(--spacing-md);
		left: var(--spacing-lg);
		padding: var(--spacing-xs) var(--spacing-md);
	}

	.banner h1 {
		color: white;
		margin: 0;
		padding: 0;
	}

	.layout {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		position: relative;
		gap: var(--spacing-lg);
		background: white;
	}

	.main-content {
		flex: 1;
		padding: 0 var(--spacing-lg);
	}

	@include breakpoint-sm {
		.layout {
			flex-direction: row;
			padding-top: var(--spacing-lg);
		}

		.main-content {
			padding: 0 var(--spacing-lg) 0 0;
		}
	}
</style>
