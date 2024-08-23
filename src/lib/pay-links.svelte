<script lang="ts">
	import PayPalLogo from '$svg/paypal.svg?component';
	import VenmoLogo from '$svg/venmo.svg?component';

	const links = [{
		title: 'PayPal',
		href: 'https://paypal.biz/jfbfound',
		bg: '#ffc439',
		Logo: PayPalLogo,
		size: '2rem'
	}, {
		title: 'Venmo',
		href: 'https://venmo.com/jfbfound?txn=pay&note=donation',
		bg: '#008cff',
		Logo: VenmoLogo,
		size: '1rem'
	}];
</script>

<ul class="pay-links">
	{#each links as { title, href, bg, Logo, size }}
		<li>
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				style={`background: ${bg}`}
			>
				<Logo
					fill="currentColor"
					height={size}
					style="z-index: 1; max-width: 100%;"
					{title}
				/>
			</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	@import '../mixins.scss';

	.pay-links {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	a {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 48px;
		padding: 0 var(--spacing-md);
		color: var(--color-white);
		border-radius: 25px;
		overflow: hidden;

		&::before {
			content: '';
			display: block;
			position: absolute;
			width: 100%;
			height: 100%;
			background: var(--color-black);
			opacity: 0;
			transition: opacity 0.2s ease-out;
		}

		&:hover::before {
			opacity: 0.15;
		}
	}

	@include breakpoint-xs {
		.pay-links {
			flex-direction: row;
		}

		li {
			flex: 1;
		}

		a {
			border-radius: 5px;
		}
	}
</style>
