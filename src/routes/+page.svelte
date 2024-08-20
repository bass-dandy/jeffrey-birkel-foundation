<script lang="ts">
	import AnchorSection from '$lib/anchor-section.svelte';
	import Footer from '$lib/footer.svelte';
	import Hero from '$lib/hero.svelte';
	import Nav from '$lib/nav.svelte';
	import sections from '$lib/sections.json';
</script>

<main>
	<Hero />

	<Nav />
	{#each Object.entries(sections) as [id, section]}
		<AnchorSection id={id} title={section.title} body={section.body} />
	{/each}

	<Footer />
</main>

<style>
	main {
		background: var(--color-white);
	}
</style>
