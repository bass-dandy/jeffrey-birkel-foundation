<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import { sections } from './consts';

	const { id, title } = sections.ourStory;
</script>

<section {id}>
	<ContentContainer>
		<SectionTitle>{title}</SectionTitle>
		<img src="images/my-story.jpg" alt="" />
		<p>
			Life really does turn on a dime… on December 4th, 2023 we received a diagnosis that we suspected and feared - Jeff had been diagnosed with ALS. For those unfamiliar, ALS is a progressive neuro-degenerative disease. It can rob you of your mobility, your ability to speak and eat, and eventually your ability to breathe. There is no cure. Only 20% of people diagnosed with ALS are still alive 3 years after symptom onset. Jeff's symptoms began almost 3.5 years ago - he's already beating the odds! Although we are devastated, we draw strength from our family and friends, and of course, our faith. Jeff is such a strong witness to the goodness of God. He immediately started making plans for how he could use his circumstance for the better, to help others, and to be an example of a life well lived. He wants to raise funds to help others with ALS, and we have started the Jeffrey F. Birkel Foundation to fundraise for the ALS Association, ALS United, and ALS Research.
		</p>
		<p>
			And we need your help!
		</p>
		<p>
			Jeff was an avid distance runner. He's run 10 marathons and one Grand Canyon Rim to Rim (which is even longer and has a 10,000ft elevation change). In 2005, Jeff ran the Boston Marathon and helped raise funds for MPD research, a rare disease with which a dear friend and co-worker had been diagnosed.
		</p>
		<p>
			Now Jeff wants to turn his diagnosis into an opportunity to raise funds for ALS, which, like MPD, is rare and under-funded. Jeff encouraged his two boys, Matt and Mike, to take up running at a young age - and they did! They both ran Boston in 2023, and on Father’s Day of 2024 they decided they'd like to try to run it again with Jeff - one of them pushing him in a racing pushchair and the other running as an individual alongside. The Boston Marathon requires setting an acceptable qualifying time at another marathon to get an entry, so they've decided their qualifying race will be the Nebraska State Fair Marathon on August 24th.
		</p>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	section {
		padding: var(--spacing-xl) 0;
	}

	img {
		width: 100%;
	}

	p {
		padding: 0;
		margin: var(--spacing-md) 0;
	}

	@include breakpoint-sm {
		img {
			float: right;
			width: 300px;
		}
	}
</style>
