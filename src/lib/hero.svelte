<script lang="ts">
	import ContentContainer from './content-container.svelte';

	const progress = 33507;
</script>

<div class="hero">
	<ContentContainer>
		<div class="hero-content">
			<img class="logo" src="images/logo.png" alt="" />
			<div class="text">
				<h1>Jeffrey F. Birkel Foundation</h1>
				Donate to fund ALS research and help Jeff get to Boston!
				<div class="funding">
					${progress.toLocaleString()} raised of $40,000 goal (updated daily)
					<div class="progress">
						<div
							class="progress-fill"
							style={`width: ${Math.floor(progress / 40000 * 100)}%;`}
						/>
					</div>
				</div>
			</div>
		</div>
	</ContentContainer>
	<img
		class="banner"
		src="images/banner.png"
		alt="Matt, Mike, and Jeff after successfully qualifying for the Boston Marathon. Jeff is in his racing wheelchair surrounded by family."
		width="1606"
		height="677"
	/>
</div>

<style lang="scss">
	@import '../mixins.scss';

	.hero {
		position: relative;
		background: var(--color-secondary);

		&::before {
			content: "";
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 75%;
			background: var(--color-white);
		}
	}

	.hero-content {
		position: relative;
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		padding: var(--spacing-xs) 0;
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

	.banner {
		position: relative;
		display: block;
		margin: auto;
		width: var(--max-page-width);
		max-width: 100%;
		height: auto;
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
