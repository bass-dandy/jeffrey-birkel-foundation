<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import DonateButton from './donate-button.svelte';
	import SocialShare from './social-share.svelte';
</script>

<nav>
	<ContentContainer class="navbar-content">
		<DonateButton />
		<SocialShare />
	</ContentContainer>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		width: 100%;
		padding-top: var(--spacing-sm);
		padding-bottom: var(--spacing-sm);
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		box-sizing: border-box;
		background: white;
		z-index: 1000;
	}

	:global(.navbar-content) {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		justify-content: space-between;
	}
</style>
