<script lang="ts">
	const progress = 0;
</script>

<div class="hero">
	<img src="images/banner.jpg" alt="" />

	<div class="hero-text">
		<h1>Jeffrey Birkel Foundation</h1>
		Donate to fund ALS research and help Jeff get to Boston!

		<div class="funding">
			${progress} raised of $20,000 goal
			<div class="progress">
				<div class="progress-fill" style={`width: ${Math.floor(progress / 20000 * 100)}%;`}/>
			</div>
		</div>
	</div>

</div>

<style lang="scss">
	@import '../mixins.scss';

	.hero {
		position: relative;
		border-bottom: 1px solid var(--color-black);
	}

	.hero img {
		width: 100%;
	}

	.hero-text {
		padding: var(--spacing-xs) var(--spacing-md);
	}

	.hero h1 {
		margin: 0;
		padding: 0;
	}

	.funding {
		margin: var(--spacing-md) 0;
	}

	.progress {
		width: 100%;
		height: 12px;
		border-radius: 6px;
		background: var(--color-black);
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: var(--color-accent);
	}

	@include breakpoint-xs {
		.hero {
			border-bottom: none;
		}

		.hero-text {
			position: absolute;
			background: var(--color-white);
			top: 0;
			left: 0;
		}
	}
</style>
