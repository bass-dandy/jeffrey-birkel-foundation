<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import Video from './video.svelte';

	const progress = 51233;
</script>

<div class="hero">
	<ContentContainer>
		<div class="hero-content">
			<img class="logo" src="images/logo.png" alt="" />
			<div class="text">
				<h1>Jeffrey F. Birkel Foundation</h1>
				Donate to fund ALS research and help Jeff get to Boston!
				<div class="funding">
					${progress.toLocaleString()} raised and counting!
				</div>
			</div>
		</div>
	</ContentContainer>
	<div class="banner">
		<Video src="https://www.youtube.com/embed/dSs4aWllVys?si=SljmjHdiK4AeG8ns&autoplay=1&mute=1" />
	</div>
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
		color: var(--color-primary);
	}

	.funding {
		margin: var(--spacing-md) 0 0;
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
