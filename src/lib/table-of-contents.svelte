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
		display: flex;
		gap: 16px;
		align-items: flex-start;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	@media (min-width:751px) {
		ul {
			flex-direction: column;
		}

		li {
			gap: 12px;
		}
	}
</style>
