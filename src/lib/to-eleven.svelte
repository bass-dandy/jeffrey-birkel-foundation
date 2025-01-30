<script lang="ts">
	import ContentContainer from './content-container.svelte';

	const images = [{
		src: 'images/chicago-2004.jpg',
		alt: 'Jeff smiling while crossing the finish line at the 2004 Chicago Marathon',
	}, {
		src: 'images/cat.jpg',
		alt: 'Jeff smiling with his arms behind his back in a bright yellow running tank with the Cat logo on the front.',
	}, {
		src: 'images/boston-2005.jpg',
		alt: 'Jeff crossing the finish line at the 2005 Boston Marathon. He is smiling but he was exhausted!',
	}];
</script>

<div class="to-eleven">
	<div class="top">
		<ContentContainer>
			<div class="images">
				{#each images as { src, alt }}
					<img
						width="752"
						height="1056"
						loading="lazy"
						{src}
						{alt}
					/>
				{/each}
			</div>
		</ContentContainer>
	</div>
	<div class="bottom">
		<ContentContainer>
			<h2>10 marathons</h2>
			<div class="subtitle">
				(and 1 Rim-to-Rim)
			</div>
			<div class="body">
				Time to turn it up to 11!
			</div>
		</ContentContainer>
	</div>
</div>

<style lang="scss">
	@import '../mixins.scss';

	.top {
		position: relative;
		margin-bottom: -1px; // to hide the subpixel seam between the two sections

		&::after {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 50%;
			background: var(--color-secondary);
			z-index: 0;
		}
	}

	.images {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-sm);
		max-width: 800px;
		margin: auto;

		 img {
			display: block;
			flex: 1;
			min-width: 0px;
			height: auto;
			border: 5px solid white;
			z-index: 1;
		}
	}

	@include breakpoint-xs {
		.images {
			gap: var(--spacing-md);

			img:nth-child(2) {
				flex: 1.2;
			}
		}
	}

	.bottom {
		background: var(--color-secondary);
		color: var(--color-white);
		padding: var(--spacing-lg) 0 var(--spacing-xl);
		text-align: center;

		h2 {
			margin: 0;
		}

		.subtitle {
			font-size: 1.5rem;
		}
	}

	.body {
		margin-top: var(--spacing-lg);
		font-size: 3rem;
		font-family: economica;
	}
</style>
