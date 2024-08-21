<script lang="ts">
	import ContentContainer from './content-container.svelte';
</script>

<div class="footer">
	<ContentContainer class="footer-content">
		<div>
			<div>501(c)(3) pending</div>
			<div>EIN: 99-4432364</div>
		</div>
		Made with ❤️ by Jeff's family
	</ContentContainer>
</div>

<style>
	.footer {
		background: var(--color-black);
		color: var(--color-white);
		padding-top: var(--spacing-sm);
		padding-bottom: var(--spacing-sm);
	}

	:global(.footer-content) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
