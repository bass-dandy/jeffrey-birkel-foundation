<script lang="ts">
	import ArrowUpRightFromSquare from '$svg/arrow-up-right-from-square-solid.svg?component';
	import Play from '$svg/play-solid.svg?component';

	export let title: string;
	export let date: string;
	export let src: string;
	export let facade: string;
	export let link: {
		href: string;
		text: string;
	} = null;

	let isMounted = false;
</script>

<div>
	<div class="headline">
		{#if date}
			{date}
		{/if}
		{#if link}
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
			>
				{link.text}
				<ArrowUpRightFromSquare
					fill="currentColor"
					height="1rem"
					style="margin-left: var(--spacing-xs); position: relative; top: 2px;"
				/>
			</a>
		{/if}
	</div>
	<div class="video">
		{#if !facade || isMounted}
			<iframe
				width="560"
				height="315"
				src={`${src}${facade ? '&autoplay=1' : ''}`}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			/>
		{:else}
			<img src={facade} alt="" loading="lazy" />
			<button on:click={() => isMounted = true}>
				<Play
					fill="currentColor"
					height="4rem"
					aria-label="play video"
				/>
			</button>
		{/if}
	</div>
	{#if title}
		<h3>{title}</h3>
	{/if}
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

	.video {
		aspect-ratio: 16 / 9;
		position: relative;
	}

	iframe {
		width: 100%;
		height: 100%;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
	}

	button {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.5);
		color: var(--color-white);
		border: 0;
		cursor: pointer;
	}
</style>
