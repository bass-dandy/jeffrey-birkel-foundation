<script lang="ts">
	import ContentContainer from './content-container.svelte';
</script>

<section>
	<ContentContainer>
		<p>
			Before his diagnosis, Jeff was an avid distance runner (he had run 10 marathons and one Grand Canyon Rim-to-Rim). Jeff’s sons, Matt &amp; Mike, followed in Jeff’s footsteps as they picked up running at a young age.
		</p>
		<p>
			Matt &amp; Mike had recently run the 2023 Boston Marathon, and after receiving Jeff’s diagnosis, they wanted to do something special for their dad – on Father’s Day of 2024 they told Jeff they wanted to run Boston again, but this time with Jeff riding along in a racing pushchair. However, getting accepted into Boston is no easy task.
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
