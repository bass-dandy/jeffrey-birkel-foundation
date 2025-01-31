<script lang="ts">
	import ContentContainer from './content-container.svelte';
</script>

<div class="footer">
	<div class="image-wrapper">
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
	</div>
	<div class="content">
		<ContentContainer class="footer-content">
			<div>
				<div>Registered 501(c)(3)</div>
				<div>EIN: 99-4432364</div>
			</div>
			<div>
				<div>Made with ❤️ by Jeff's family</div>
				<div>email: <a href="mailto:jfbfound@gmail.com" target="__blank" rel="noopener noreferrer">jfbfound@gmail.com</a>
			</div>
		</ContentContainer>
	</div>
</div>

<style>
	.footer {
		position: relative;
	}

	.image-wrapper {
		position: relative;
	}

	.image-wrapper::before {
		content: '';
		display: block;
		background: var(--color-black);
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 25%;
	}

	img {
		position: relative;
		display: block;
		width: 100%;
		max-width: var(--max-page-width);
		height: auto;
		margin: auto;
	}

	.content {
		width: 100%;
		padding: var(--spacing-md) 0;
		box-sizing: border-box;
		background: var(--color-black);
		color: var(--color-white);
	}

	a {
		color: var(--color-accent);
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	:global(.footer-content) {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-sm);
	}
</style>
