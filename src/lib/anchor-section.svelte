<script lang="ts">
	import sections from '$lib/sections.json';

	export let id = '';
	export let title = '';
	export let body = '';
</script>

<section id={id}>
	<h2>{title}</h2>
	<div class="content">
		<p>{body}</p>
		<img src={`images/${id}.jpg`} alt="" />
	</div>
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

	.content {
		display: flex;
		flex-direction: column-reverse;
	}

	p {
		padding: 0 var(--spacing-sm);
		margin: var(--spacing-md) 0 var(--spacing-lg);
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

		section:nth-of-type(even) .content {
			flex-direction: row-reverse;
		}

		.content {
			flex-direction: row;
			align-items: center;
		}

		 img {
		 	 height: 100%;
			max-width: 50%;
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

	@include breakpoint-md {
		img {
			max-width: 40%;
			border-radius: 0;
		}
	}
</style>
