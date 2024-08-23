<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import { sections } from './consts';

	const { id, title, body } = sections.ourStory;
</script>

<section {id}>
	<ContentContainer>
		<SectionTitle>{title}</SectionTitle>
		<p>{body}</p>
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0;
	}

	p {
		padding: 0;
		margin: var(--spacing-md) 0;
		white-space: pre-wrap;
	}
</style>
