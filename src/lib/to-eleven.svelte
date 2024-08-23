<script lang="ts">
	import ContentContainer from './content-container.svelte';
</script>

<div class="to-eleven">
	<div class="top">
		<ContentContainer>
			<div class="images">
				<img src="images/chicago-2004.jpeg" alt="" />
				<img src="images/cat.jpeg" alt="" />
				<img src="images/boston-2005.jpeg" alt="" />
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
				Help us turn it up to 11!
			</div>
		</ContentContainer>
	</div>
</div>

<style lang="scss">
	@import '../mixins.scss';

	.to-eleven {
		position: relative;
	}

	.top {
		position: relative;
		margin-bottom: -1px; /* to hide the subpixel seam between the two sections */
	}

	.top::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 50%;
		background: var(--color-secondary);
		z-index: 0;
	}

	.images {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-sm);
		max-width: 800px;
		margin: auto;
	}

	.images img {
		display: block;
		min-width: 0px;
		flex: 1;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
		z-index: 1;
	}

	.bottom {
		background: var(--color-secondary);
		color: var(--color-white);
		padding: var(--spacing-lg) 0 var(--spacing-xl);
		text-align: center;
	}

	.bottom h2 {
		margin: 0;
	}

	.body {
		margin-top: var(--spacing-lg);
		font-size: 3rem;
		font-family: economica;
	}

	@include breakpoint-xs {
		.images {
			gap: var(--spacing-lg);
		}

		.images img:nth-child(2) {
			flex: 1.3;
		}
	}
</style>
