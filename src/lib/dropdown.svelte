<script lang="ts">
	import { createPopover } from 'svelte-headlessui'
	import { fade } from 'svelte/transition';

	const popover = createPopover({});
</script>

<div class="dropdown">
	<button use:popover.button>
		<slot name="button" />
	</button>

	{#if $popover.expanded}
		<div transition:fade={{ duration: 100 }}>
			<div class="panel" use:popover.panel>
				<slot name="panel" />
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../mixins.scss';

	.dropdown {
		position: relative;
	}

	button {
		padding: var(--spacing-xs) var(--spacing-md);
		border: 0;
		border-radius: 5px;
		background: transparent;
		cursor: pointer;
		font-size: 1.2rem;

		&:hover {
			background: var(--color-gray);
		}
	}

	.panel {
		position: absolute;
		top: calc(100% + var(--spacing-lg));
		right: 0;
		background: var(--color-white);
		border-radius: 5px;
		filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.5));

		&::after {
			content: '';
			display: block;
			position: absolute;
			top: -10px;
			right: 33px;
			width: 0;
			height: 0;
			border-left: 10px solid transparent;
			border-right: 10px solid transparent;
			border-bottom: 10px solid var(--color-white);
		}
	}
</style>
