<script lang="ts">
	import ContentContainer from './content-container.svelte';

	const progress = 19739;
</script>

<ContentContainer class="hero">
	<img class="logo" src="images/logo.png" alt="" />
	<div class="text">
		<h1>Jeffrey F. Birkel Foundation</h1>
		Donate to fund ALS research and help Jeff get to Boston!
		<div class="funding">
			${progress.toLocaleString()} raised of $20,000 goal (updated daily)
			<div class="progress">
				<div
					class="progress-fill"
					style={`width: ${Math.floor(progress / 20000 * 100)}%;`}
				/>
			</div>
		</div>
	</div>
</ContentContainer>

<style lang="scss">
	@import '../mixins.scss';

	:global(.hero) {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		padding: var(--spacing-xs) var(--spacing-md);
		background: var(--color-white);
	}

	.logo {
		display: none;
		width: auto;
	}

	.text {
		flex: 1;
	}

	h1 {
		margin: 0;
		padding: 0;
		color: var(--color-secondary);
	}

	.funding {
		margin: var(--spacing-md) 0;
	}

	.progress {
		width: 100%;
		height: 10px;
		border-radius: 6px;
		background: var(--color-black);
		border: 1px solid var(--color-black);
		overflow: hidden;
		margin-top: var(--spacing-xs);
	}

	.progress-fill {
		height: 100%;
		background: var(--color-accent);
		max-width: 100%;
	}

	@include breakpoint-xs {
		.logo {
			display: block;
			height: 100px;
		}
	}

	@include breakpoint-sm {
		.logo {
			height: 130px;
		}
	}
</style>
