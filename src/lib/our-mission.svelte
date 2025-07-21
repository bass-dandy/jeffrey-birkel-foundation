<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<section>
	<ContentContainer>
		<SectionTitle>Our mission</SectionTitle>
		We started the Jeffrey F. Birkel Foundation to fundraise for the ALS Association, ALS United, and ALS research. Back in 2005, Jeff ran the Boston Marathon and helped raise funds for MPD research, a rare disease with which a dear friend and coworker had been diagnosed. Similar to MPD, ALS is also rare and underfunded. Remembering his past Boston experience and inspired by the gift of his sons pushing him in a racing wheelchair, Jeff wanted to turn this into an opportunity to raise awareness funds for ALS treatments and eventual cures.
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0;
	}
</style>
