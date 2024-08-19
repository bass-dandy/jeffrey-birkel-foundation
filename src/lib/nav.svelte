<script lang="ts">
	import TableOfContents from '$lib/table-of-contents.svelte';
	import SocialShare from '$lib/social-share.svelte';
</script>

<div class="nav">
	<TableOfContents />
	<SocialShare />
</div>

<style lang="scss">
	@import '../mixins.scss';

	.nav {
		display: flex;
		gap: var(--spacing-md);
		position: sticky;
		top: 0;
		width: 100%;
		justify-content: space-between;
		background: white;
		box-sizing: border-box;
		padding: var(--spacing-sm) var(--spacing-lg);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
	}

	@include breakpoint-sm {
		.nav {
			flex-direction: column;
			justify-content: flex-start;
			width: auto;
			padding: 0 0 0 var(--spacing-lg);
			box-shadow: none;
		}
	}
</style>
