<script lang="ts">
	import ArrowUpRightFromSquare from '$svg/arrow-up-right-from-square-solid.svg?component';
	import Play from '$svg/play-solid.svg?component';

	export let title: string;
	export let date: string;
	export let src: string;
	export let href: string;
	export let facade: string;

	let isMounted = false;
</script>

<div>
	{#if date}
		<strong>{date} </strong>
	{/if}
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
	<h3>
		{#if href}
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{title}
			<ArrowUpRightFromSquare
				fill="currentColor"
				height="1rem"
				style="margin-left: var(--spacing-xs); position: relative; top: 2px;"
			/>
		</a>
		{:else}
			{title}
		{/if}
	</h3>
</div>

<style>
	h3 {
		margin: 0 0 var(--spacing-xs) 0;
		font-size: 1.125rem;
		font-weight: normal;
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
