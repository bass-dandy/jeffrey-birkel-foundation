<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<section>
	<ContentContainer>
		<SectionTitle>Why donate?</SectionTitle>
		Since all funds raised by the Jeffrey F. Birkel Foundation will eventually be donated to either ALS United or the ALS Association, you might be wondering: why not donate to those charities directly? Well, if Matt and Mike qualify for the Boston Marathon, we'll still need to apply for a separate pushchair entry. To get a charitable bib entry, we'll likely need to raise over $20,000 by November. Time is precious; though we've set our sights on Boston 2024, donating to the Jeffrey F. Birkel Foundation allows us to save up and try again in 2025 if we fail to get a bib this year. In addition, incorporating as a 501(c)(3) non-profit corporation ensures all your donations will be tax-exempt and meet the requirements of companies with matching gift programs.
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0;
	}
</style>
