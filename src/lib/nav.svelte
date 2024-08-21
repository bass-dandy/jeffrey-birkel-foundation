<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import DonateButton from './donate-button.svelte';
	import SocialShare from './social-share.svelte';
</script>

<ContentContainer class="navbar">
	<DonateButton />
	<SocialShare />
</ContentContainer>

<style>
	:global(.navbar) {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		justify-content: space-between;
		position: sticky;
		top: 0;
		width: 100%;
		padding-top: var(--spacing-sm);
		padding-bottom: var(--spacing-sm);
		box-sizing: border-box;
		background: white;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		z-index: 1000;
	}
</style>
