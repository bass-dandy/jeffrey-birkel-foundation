<div class={`${$$props.class || ''} content-container`}>
	<slot />
</div>

<style lang="scss">
	@import '../mixins.scss';

	.content-container {
		padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
	}

	@include breakpoint-xs {
		.content-container {
			padding-left: var(--spacing-md);
			padding-right: var(--spacing-md);
		}
	}

	@include breakpoint-sm {
		.content-container {
			padding-left: var(--spacing-lg);
			padding-right: var(--spacing-lg);
		}
	}
</style>
