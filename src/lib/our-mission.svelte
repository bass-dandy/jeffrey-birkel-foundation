<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<section>
	<ContentContainer>
		<SectionTitle>Our mission</SectionTitle>
		<p>
			We started the Jeffrey F. Birkel Foundation to fundraise for the ALS Association, ALS United, and ALS research. Before his diagnosis, Jeff was an avid distance runner (he's run 10 marathons and one Grand Canyon Rim-to-Rim). In 2005, Jeff ran the Boston Marathon and helped raise funds for MPD research, a rare disease with which a dear friend and coworker had been diagnosed. Now Jeff wants to turn his diagnosis into an opportunity to raise funds for ALS, which, like MPD, is rare and under-funded.
		</p>
		<p>
			Jeff encouraged his two boys, Matt and Mike, to take up running at a young age - and they did! They both ran Boston in 2023, and on Father’s Day of 2024 they decided to run it again with Jeff, with one of them pushing him in a racing pushchair and the other running alongside. However, getting accepted into Boston is no easy task.
		</p>
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0;
		color: var(--color-white);
		background:
			linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
			url('/images/r2r-2x.jpg');
		background:
			linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
			image-set(
				url('/images/r2r-1x.jpg') 1x,
				url('/images/r2r-2x.jpg') 2x,
				url('/images/r2r-3x.jpg') 3x,
				url('/images/r2r-4x.jpg') 4x
			);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top center;
	}
</style>
