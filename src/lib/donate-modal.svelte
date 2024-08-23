<script lang="ts">
	import { getModalContext } from 'smodale';
	import XMarkIcon from '$svg/xmark-solid.svg?component';
	import PayLinks from './pay-links.svelte';

	const { hide } = getModalContext();
</script>

<div class="modal">
	<div class="title">
		<h2>Make a donation</h2>
		<button on:click={hide} class="close-button">
			<XMarkIcon height="24px" fill="currentColor" aria-label="close dialog" />
		</button>
	</div>

	<div class="content">
		Your support is greatly appreciated and 100% of your donation will go to the Foundation's mission. Thank you!
		<PayLinks />
		You can also send a payment through mail to:
		<div class="address">
			{'The Jeffrey F Birkel Foundation\n30090 E McCullough Rd\nBrady, Nebraska 69123'}
		</div>
	</div>

	<div class="footer">
		Sláinte!
		<img
			src="images/donate-2x.jpg"
			srcset="images/donate-1x.jpg 600w, images/donate-2x.jpg 800w, images/donate-3x.jpg 1000w, images/donate-4x.jpg 1296w"
			alt="Jeff, the boys, and their wives Kalin and Sasha smiling and holding up some beers at the end of a race. Look like it was cloudy and wet outside but they still had a good time!"
			width="800"
			height="450"
		/>
	</div>
</div>

<style lang="scss">
	@import '../mixins.scss';

	.modal {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		height: 100%;
		overflow: auto;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--spacing-md);
		padding: var(--spacing-md) 0;
		background: var(--color-secondary);
		color: var(--color-white);

		h2 {
			flex: 1;
			margin: 0;
			padding: 0;
		}
	}

	.close-button {
		background: none;
		border: 0;
		cursor: pointer;
		color: white;
	}

	.content {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.title, .content {
		padding-left: var(--spacing-sm);
		padding-right: var(--spacing-sm);
	}

	.address {
		white-space: pre-wrap;
	}

	.footer {
		text-align: center;
		font-size: 1.5rem;

		img {
			display: block;
			width: 100%;
			height: auto;
			margin-top: var(--spacing-sm);
		}
	}

	@include breakpoint-xs {
		.modal {
			height: auto;
		}

		.title, .content {
			padding-left: var(--spacing-md);
			padding-right: var(--spacing-md);
		}
	}
</style>
