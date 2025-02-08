<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import DonateButton from './donate-button.svelte';
	import SocialFollow from './social-follow.svelte';
	import SocialShare from './social-share.svelte';
</script>

<nav>
	<ContentContainer class="navbar-content">
		<DonateButton />
		<div class="social">
			<SocialFollow />
			<SocialShare />
		</div>
	</ContentContainer>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		width: 100%;
		padding-top: var(--spacing-sm);
		padding-bottom: var(--spacing-sm);
		box-sizing: border-box;
		background: var(--color-secondary);
		z-index: 1000;
	}

	.social {
		display: flex;
		gap: var(--spacing-sm);
	}

	:global(.navbar-content) {
		display: flex;
		align-items: stretch;
		gap: var(--spacing-md);
		justify-content: space-between;
	}
</style>
