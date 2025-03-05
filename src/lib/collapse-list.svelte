<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import ChevronUpIcon from '$svg/chevron-up-solid.svg?component';
	import ChevronDownIcon from '$svg/chevron-down-solid.svg?component';

	export let variant: 'grid' | 'list' = 'list';
	export let showFade = false;
	export let isExpanded = false; // bindable, parent must handle which children to show
</script>

<div>
	<ul
		class:collapsed={!isExpanded}
		class:fade={showFade}
		style:display={variant === 'grid' ? 'grid' : 'block'}
	>
		<slot />
	</ul>
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

<style lang="scss">
	@import '../mixins.scss';

	ul {
		position: relative;
		list-style-type: none;
		padding: 0;
		margin: 0;
		transition: height 0.5s ease-out;

		/* only relevant for grid mode */
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-sm);

		&.collapsed.fade::after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 100px;
			background: linear-gradient(transparent, var(--color-white));
		}
	}

	@include breakpoint-xs {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.toggle {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-md);

		button {
			display: flex;
			align-items: center;
			gap: var(--spacing-sm);
			background: transparent;
			border: 0;
			border-radius: 5px;
			color: var(--color-secondary);
			cursor: pointer;
			font-size: 1rem;
			padding: var(--spacing-sm) var(--spacing-lg);

			&:hover {
				background: var(--color-darken);
			}
		}
	}
</style>
