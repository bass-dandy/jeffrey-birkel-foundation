<div class="footer">
	<div>
		<div>501(c)(3) pending</div>
		<div>EIN: 99-4432364</div>
	</div>
	Made with ❤️ by Jeff's family
</div>

<style lang="scss">
	@import '../mixins.scss';

	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: var(--color-black);
		color: var(--color-white);
		padding: var(--spacing-xs) var(--spacing-sm);
	}

	@include breakpoint-xs {
		.footer {
			padding: var(--spacing-sm) var(--spacing-md);
		}
	}

	@include breakpoint-sm {
		.footer {
			padding: var(--spacing-sm) var(--spacing-lg);
		}
	}
</style>
