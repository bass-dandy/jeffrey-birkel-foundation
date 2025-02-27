<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<section>
	<ContentContainer>
		<div class="content">
			<div class="text">
				<SectionTitle>Our story</SectionTitle>
				Life really does turn on a dime… on December 4th, 2023 we received a diagnosis that we suspected and feared - Jeff had been diagnosed with ALS. For those unfamiliar, ALS is a progressive neuro-degenerative disease. It can rob you of your mobility, your ability to speak and eat, and eventually your ability to breathe. There is no cure. Only 20% of people diagnosed with ALS are still alive 3 years after symptom onset. Jeff's symptoms began almost 3.5 years ago - he's already beating the odds! Although we are devastated, we draw strength from our family and friends, and of course, our faith. Jeff is such a strong witness to the goodness of God. He immediately started making plans for how he could use his circumstance for the better, to help others, and to be an example of a life well-lived.
			</div>
			<img
				src="images/cancun-2x.webp"
				srcset="
					images/cancun-1x.webp 500w,
					images/cancun-2x.webp 1000w,
					images/cancun-3x.webp 1500w,
					images/cancun-4x.webp 2000w
				"
				alt="the Birkel family gathered around Jeff in Cancun"
				width="500"
				height="334"
			/>
		</div>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		position: relative;
		gap: var(--spacing-lg);
		padding: var(--spacing-xl) 0;
	}

	img {
		display: block;
		flex-shrink: 0;
		width: 100%;
		height: auto;
	}

	@include breakpoint-xs {
		img {
			position: relative;
			top: 50px;
			width: calc(100% - 50px);
			border: 5px solid var(--color-white);
			box-shadow: 50px -50px 0 var(--color-secondary);
		}
	}

	@include breakpoint-sm {
		.content {
			flex-direction: row;
			align-items: center;
		}

		img {
			width: calc(60% - 50px);
			max-width: calc(50% - 50px);
			margin-left: 50px;
			left: -50px;
		}
	}
</style>
