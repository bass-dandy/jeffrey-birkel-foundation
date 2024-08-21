<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import { sections } from './consts';

	const { id, title } = sections.whyDonate;
</script>

<section {id}>
	<ContentContainer>
		<SectionTitle>{title}</SectionTitle>
		Since all funds raised by the Jeffrey F. Birkel Foundation will eventually be donated to either ALS United or the ALS Association, you might be wondering: why not donate to those charities directly? Well, if Matt and Mike qualify for the Boston Marathon, we'll still need to apply for a separate pushchair entry. To get a charitable bib entry, we'll likely need to raise over $20,000 by November. Donating to the Jeffrey F. Birkel Foundation provides us a safeguard - if we're unable to get a bib through the ALS association, we can try to get one through ALS United instead. In addition, incorporating as a 501(c)(3) non-profit corporation ensures all your donations will be tax-exempt and meet the requirements of companies with matching gift programs.
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0;
		color: var(--color-white);
		background:
			linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
			url('images/test.jpg') top center / cover no-repeat;
	}

	h2 {
		border-bottom: 2px solid var(--color-accent);
		margin: 0 0 var(--spacing-md) 0;
	}
</style>
