<button>
	<span class="text">Donate</span>
</button>

<style lang="scss">
	@import '../mixins.scss';

	button {
		position: relative;
		padding: var(--spacing-sm) var(--spacing-lg);
		margin: 0;
		background: var(--color-secondary);
		border: 0;
		border-radius: 20px;
		transition: --gradient 0.2s ease-out;
		overflow: hidden;

		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(30deg, var(--color-accent), var(--color-secondary)) no-repeat;
			background-position: -100px 0;
			opacity: 0;
			transition: opacity 0.2s ease-out, background-position 0.2s ease-out;
		}

		&:hover:before {
			opacity: 0.75;
			background-position: 0 0;
		}

		.text {
			position: relative;
			font-family: economica;
			font-size: 1.2rem;
			color: var(--color-white);
			z-index: 1;
		}
	}

	@include breakpoint-xs {
		button {
			padding: var(--spacing-sm) var(--spacing-xl);
		}
	}
</style>
