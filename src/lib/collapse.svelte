<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import ChevronUpIcon from '$svg/chevron-up-solid.svg?component';
	import ChevronDownIcon from '$svg/chevron-down-solid.svg?component';

	export let showFade = false;
	export let isExpanded = false; // bindable, parent must handle which children to show
</script>

<div>
	<div
		class:collapsed={!isExpanded}
		class:fade={showFade}
	>
		<slot />
	</div>
	<div class="toggle">
		<button on:click={() => isExpanded = !isExpanded}>
			{isExpanded ? 'Show less' : 'Show more'}
			{#if isExpanded}
				<ChevronUpIcon fill="currentColor" height="0.75rem"/>
			{:else}
				<ChevronDownIcon fill="currentColor" height="0.75rem"/>
			{/if}
		</button>
	</div>
</div>

<style>
	.fade {
		position: relative;
	}

	.fade.collapsed::after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100px;
		background: linear-gradient(transparent, var(--color-white));
	}

	.toggle {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-md);
	}

	.toggle button {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		background: transparent;
		border: 1px solid var(--color-secondary);
		border-radius: 5px;
		color: var(--color-secondary);
		cursor: pointer;
		font-size: 1rem;
		padding: var(--spacing-sm) var(--spacing-lg);
	}

	.toggle button:hover {
		background: var(--color-darken);
	}
</style>
