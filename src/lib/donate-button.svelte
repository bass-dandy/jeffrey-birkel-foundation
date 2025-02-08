<script lang="ts">
	import { blur } from 'svelte/transition';
	import smodale, { Modal } from 'smodale';
	import DonateModal from './donate-modal.svelte';

	const id = 'donate-modal';
</script>

<button on:click={() => smodale.show(id)}>
	<span class="text">Donate</span>
</button>

<Modal
	name={id}
	transition={blur}
	transitionParams={{ duration: 200 }}
	breakpoints={{
		'0px': {
			maxWidth: '100%',
			height: '100%',
			padding: '0',
			margin: '0'
		},
		'501px': {
			centered: true,
			maxWidth: '500px',
			height: 'auto',
			margin: '32px',
			borderRadius: '10px'
		}
	}}
>
	<DonateModal />
</Modal>

<style lang="scss">
	@import '../mixins.scss';

	button {
		position: relative;
		padding: var(--spacing-sm) var(--spacing-lg);
		margin: 0;
		background: var(--color-white);
		border: 0;
		border-radius: 20px;
		transition: --gradient 0.2s ease-out;
		overflow: hidden;
		cursor: pointer;

		&:before {
			content: '';
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(30deg, var(--color-accent), var(--color-white)) no-repeat;
			background-position: -100px 0;
			opacity: 0;
			transition: opacity 0.2s ease-out, background-position 0.2s ease-out;
		}

		&:hover:before {
			opacity: 0.25;
			background-position: 0 0;
		}

		.text {
			position: relative;
			font-family: economica;
			font-size: 1.2rem;
			color: var(--color-secondary);
			z-index: 1;
			text-transform: uppercase;
			font-weight: bold;
		}
	}

	@include breakpoint-xs {
		button {
			padding: var(--spacing-sm) var(--spacing-xl);
		}
	}
</style>
