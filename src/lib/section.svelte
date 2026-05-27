<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';

	export let title: string;
</script>

<section>
	<ContentContainer>
		<SectionTitle>{title}</SectionTitle>
		<slot />
	</ContentContainer>
</section>

<style>
	section {
		padding-top: var(--spacing-xl);
	}
	p:last-child {
		margin-bottom: 0;
	}
	.blockquote {
		padding: var(--spacing-sm);
		padding-left: var(--spacing-lg);
		background-color: var(--color-darken);
		border-left: 4px solid var(--color-accent);
		font-style: italic;
	}
</style>
