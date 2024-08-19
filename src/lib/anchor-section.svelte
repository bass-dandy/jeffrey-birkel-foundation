<script lang="ts">
	import sections from '$lib/sections.json';

	export let id = '';
	export let title = '';
	export let body = '';
</script>

<section id={id}>
	<h2>{title}</h2>
	<p>{body}</p>
</section>

<style>
	section {
		font-size: 1rem;
	}

	section:not(:last-child) {
		margin-bottom: var(--spacing-lg);
	}

	h2 {
		margin: 0;
		margin-bottom: var(--spacing-sm);
		font-size: 2rem;
	}

	p {
		font-size: 1.25rem;
		white-space: pre-wrap;
	}
</style>
