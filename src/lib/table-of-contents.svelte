<script lang="ts">
	import sections from '$lib/sections.json';
</script>

<ul>
	{#each Object.entries(sections) as [id, section]}
		<li>
			<a href={`#${id}`}>{section.title}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li {
		margin: 12px 0;
	}
</style>
