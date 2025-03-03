<script lang="ts">
	import ImageIcon from '$svg/image-solid.svg?component';
	import ImagesIcon from '$svg/images-solid.svg?component';
	import FilmIcon from '$svg/film-solid.svg?component';
	import ChevronUpIcon from '$svg/chevron-up-solid.svg?component';
	import ChevronDownIcon from '$svg/chevron-down-solid.svg?component';

	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import res from '../insta.json';

	const FOLD_IDX = 6;
	let isExpanded = false;

	$: visiblePosts = isExpanded ? (res.data) : (res.data.slice(0, FOLD_IDX));
</script>

<section>
	<ContentContainer>
		<SectionTitle>Social Media</SectionTitle>
		<div class="content">
			{#each visiblePosts as post (post.id)}
				<a class="post" href={post.permalink} target="__blank" rel="noopener noreferrer">
					<img
						src={post.thumbnail_url || post.media_url}
						alt="instagram post by jfbfound"
						loading="lazy"
					/>
					<div class="caption">
						{post.caption}
					</div>
					<div class="media-type">
						{#if post.media_type === 'IMAGE'}
							<ImageIcon fill="currentColor" height="1.75rem" />
						{:else if post.media_type === 'CAROUSEL_ALBUM'}
							<ImagesIcon fill="currentColor" height="1.75rem" />
						{:else if post.media_type === 'VIDEO'}
							<FilmIcon fill="currentColor" height="1.75rem" />
						{/if}
					</div>
				</a>
			{/each}
		</div>
		<div class="toggle">
			<button on:click={() => isExpanded = !isExpanded}>
				{isExpanded ? 'Show less' : 'Show more'}
				{#if isExpanded}
					<ChevronUpIcon fill="currentColor" height="0.75rem"/>
				{:else}
					<ChevronDownIcon fill="currentColor" height="0.75rem"/>
				{/if}
			</button>
		</div>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	section {
		padding: var(--spacing-xl) 0 0;
	}

	.content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		width: 100%;
		padding-top: var(--spacing-lg);
		gap: var(--spacing-sm);
	}

	@include breakpoint-xs {
		.content {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}

	.caption {
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
		opacity: 0;
		transition: opacity 0.1s ease-out;
		white-space: pre-wrap;
		padding: var(--spacing-xs);
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.9rem;

		&::after {
			content: '';
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 25%;
			background: linear-gradient(transparent, rgba(0, 0, 0, 1));
			z-index: 1;
		}
	}

	.media-type {
		position: absolute;
		top: 10px;
		right: 10px;
		opacity: 1;
		transition: opacity 0.1s ease-out;
	}

	.post {
		position: relative;
		display: flex;
		align-items: center;
		aspect-ratio: 1/1;
		overflow: hidden;
		color: var(--color-white);
		transition: transform 0.1s ease-out;

		&:hover, &:focus {
			transform: scale(1.02);

			.caption {
				opacity: 1;
			}

			.media-type {
				opacity: 0;
			}
		}
	}

	img {
		width: 100%;
	}

	.toggle {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-md);
	}

	.toggle button {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		background: transparent;
		border: 0;
		border-radius: 5px;
		color: var(--color-secondary);
		cursor: pointer;
		font-size: 1rem;
		padding: var(--spacing-sm) var(--spacing-lg);
	}

	.toggle button:hover {
		background: var(--color-darken);
	}
</style>
