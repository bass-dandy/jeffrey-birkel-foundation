<script lang="ts">
	import ArrowUpRightFromSquare from '$svg/arrow-up-right-from-square-solid.svg?component';

	export let title: string;
	export let date: string;
	export let href: string;
	export let thumbnail: string;
</script>

<div>
	{#if date}
		<div class="headline">{date}</div>
	{/if}
	<a href={href} target="_blank" rel="noopener noreferrer">
		<img src={thumbnail} alt="" loading="lazy" class="thumbnail" />
		<h3>{title}</h3>
	</a>
</div>

<style>
	.headline {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	h3 {
		margin: 0 0 var(--spacing-xs) 0;
		font-size: 1.125rem;
		font-weight: bold;
	}

	a:hover {
		text-decoration: none;
	}

	.thumbnail {
		display: block;
		aspect-ratio: 16 / 9;
		border: 1px solid var(--color-primary);
		width: 100%;
		height: 100%;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0);
		transition: box-shadow 0.15s, transform 0.15s, border-color 0.15s;
	}

	a:hover .thumbnail {
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
		transform: scale(1.01);
		border-color: blue;
	}
</style>
