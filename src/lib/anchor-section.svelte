<script lang="ts">
	import sections from '$lib/sections.json';

	export let id = '';
	export let title = '';
	export let body = '';
</script>

<section id={id}>
	<h2>{title}</h2>
	<img src={`images/${id}.jpg`} alt="" />
	<p>{body}</p>
</section>

<style lang="scss">
	@import '../mixins.scss';

	section:nth-of-type(even) {
		background: var(--color-accent);
	}

	h2 {
		background: var(--color-black);
		color: var(--color-white);
		margin: 0;
		padding: var(--spacing-sm) var(--spacing-sm);
	}

	p {
		padding: 0 var(--spacing-sm);
		margin: var(--spacing-md) 0 var(--spacing-lg);
		font-size: 1.25rem;
		white-space: pre-wrap;
	}

	img {
		width: 100%;
	}

	@include breakpoint-xs {
		h2 {
			padding: var(--spacing-sm) var(--spacing-md);
		}

		p {
			padding: 0 var(--spacing-md);
		}

		 img {
			float: right;
			width: 400px;
			max-width: 100%;
			border-bottom-left-radius: 200px;
		}
	}

	@include breakpoint-sm {
		h2 {
			padding: var(--spacing-sm) var(--spacing-lg);
		}

		p {
			padding: 0 var(--spacing-lg);
		}
	}
</style>
