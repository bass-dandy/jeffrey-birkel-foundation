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

<style lang="scss">
	@import '../mixins.scss';

	ul {
		display: flex;
		gap: var(--spacing-md);
		align-items: flex-start;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	@include breakpoint-sm {
		ul {
			flex-direction: column;
		}

		li {
			gap: var(--spacing-sm);
		}
	}
</style>
