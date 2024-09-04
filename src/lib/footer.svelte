<script lang="ts">
	import ContentContainer from './content-container.svelte';
</script>

<div class="footer">
	<img
		src="images/footer-2x.jpg"
		srcset="
			images/footer-1x.jpg 1000w,
			images/footer-2x.jpg 2000w,
			images/footer-3x.jpg 3000w,
			images/footer-4x.jpg 4000w
		"
		alt="Jeff's family posing for a selfie while eating burgers. From left to right, back to front: Chris, Karla, Katie, Jeff, Kalin, Christian, Mike, Sasha, and Matt"
		loading="lazy"
	/>
	<div class="overlay">
		<ContentContainer class="footer-content">
			<div>
				<div>Registered 501(c)(3)</div>
				<div>EIN: 99-4432364</div>
			</div>
			Made with ❤️ by Jeff's family
		</ContentContainer>
	</div>
</div>

<style>
	.footer {
		position: relative;
		background: var(--color-black);
		color: var(--color-white);
	}

	img {
		display: block;
		width: 100%;
		height: auto;
	}

	.overlay {
		position: sticky;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: var(--spacing-sm) 0;
		box-sizing: border-box;
		background: var(--color-black);
	}

	:global(.footer-content) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
