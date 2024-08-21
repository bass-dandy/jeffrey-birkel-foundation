<script lang="ts">
	import ContentContainer from './content-container.svelte';
</script>

<ContentContainer class="footer">
	<div>
		<div>501(c)(3) pending</div>
		<div>EIN: 99-4432364</div>
	</div>
	Made with ❤️ by Jeff's family
</ContentContainer>

<style>
	:global(.footer) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--color-black);
		color: var(--color-white);
		padding-top: var(--spacing-sm);
		padding-bottom: var(--spacing-sm);
	}
</style>
