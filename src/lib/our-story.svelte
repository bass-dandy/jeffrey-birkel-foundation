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
			<div class="images">
				<picture>
					<source
						media="(min-width:751px)"
						srcset="images/steamboat-2017-1x.jpg 500w, images/steamboat-2017-2x.jpg 1000w, images/steamboat-2017-3x.jpg 1500w, images/steamboat-2017-4x.jpg 1926w"
						width="1926"
						height="1926"
					>
					<img
						src="images/steamboat-2017-wide-2x.jpg"
						srcset="images/steamboat-2017-wide-1x.jpg 500w, images/steamboat-2017-wide-2x.jpg 1000w, images/steamboat-2017-wide-3x.jpg 1500w, images/steamboat-2017-wide-4x.jpg 2000w"
						alt="Jeff, his daughter Katie, and her husband Chris smiling for a group selfie at the 2017 Steamboat Classic"
						class="image-top"
						width="2000"
						height="1235"
					/>
				</picture>
				<picture>
					<source
						media="(min-width:751px)"
						srcset="images/vineyard-1x.jpg 500w, images/vineyard-2x.jpg 1000w, images/vineyard-3x.jpg 1500w, images/vineyard-4x.jpg 1934w"
						width="1934"
						height="1934"
					>
					<img
						src="images/vineyard-wide-2x.jpg"
						srcset="images/vineyard-wide-1x.jpg 500w, images/vineyard-wide-2x.jpg 1000w, images/vineyard-wide-3x.jpg 1500w, images/vineyard-wide-4x.jpg 2000w"
						alt="Jeff and his wife Karla smiling for a selfie while working in their Nebraska vineyard"
						class="image-bottom"
						width="2000"
						height="1235"
					/>
				</picture>
			</div>
		</div>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	.content {
		display: flex;
		flex-direction: column;
		position: relative;
		gap: var(--spacing-lg);
		padding: var(--spacing-xl) 0;
	}

	.text {
		align-self: flex-start;
	}

	.images {
		align-self: center;
		position: relative;
		width: 100%;
		height: 200px;
		flex-shrink: 0;

		img {
			display: block;
			position: absolute;
			border: 5px solid var(--color-white);
			width: 55%;
			height: auto;
		}
	}

	.image-top {
		top: 0;
		right: 0;
		z-index: 1;
	}

	.image-bottom {
		bottom: 0;
		left: 0;
	}

	@include breakpoint-xs {
		.images {
			height: 300px;
		}
	}

	@include breakpoint-sm {
		.content {
			flex-direction: row;
			padding: 0;
		}

		.text {
			padding: var(--spacing-xl) 0;
		}

		.images {
			width: 400px;
			height: 400px;
			max-width: 50%;
			margin: var(--spacing-md) 0;

			img {
				width: 60%;
			}
		}
	}
</style>
