<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import { sections } from './consts';

	const { id, title, body } = sections.whyDonate;
</script>

<section {id}>
	<ContentContainer>
		<SectionTitle>{title}</SectionTitle>
		{body}
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0;
		color: var(--color-white);
		background:
			linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
			url('/images/why-donate.jpg');
		background:
			linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
			image-set(
				url('/images/why-donate-1x.jpg') 1x,
				url('/images/why-donate-2x.jpg') 2x,
				url('/images/why-donate-3x.jpg') 3x,
				url('/images/why-donate-4x.jpg') 4x
			);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: top center;
	}

	h2 {
		border-bottom: 2px solid var(--color-accent);
		margin: 0 0 var(--spacing-md) 0;
	}
</style>
