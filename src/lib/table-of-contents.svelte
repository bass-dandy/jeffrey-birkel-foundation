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
		align-self: flex-end;
		display: flex;
		gap: var(--spacing-md);
		align-items: flex-end;
		list-style-type: none;
		margin: 0;
		padding: 0;
	}

	li, a {
		height: 100%;
		box-sizing: border-box;
	}

	a {
		display: flex;
		align-items: flex-end;
		padding: var(--spacing-sm) 0;
		border-bottom: 5px solid transparent;
		font-family: economica;
		font-size: 1.25rem;
		text-decoration: none;
		color: var(--color-black);

		&:hover {
			border-color: var(--color-accent);
		}
	}

	@include breakpoint-sm {
		ul {
			gap: var(--spacing-lg);
		}
	}
</style>
