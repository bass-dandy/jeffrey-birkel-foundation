<script lang="ts">
	import ImageIcon from '$svg/image-solid.svg?component';
	import ImagesIcon from '$svg/images-solid.svg?component';
	import FilmIcon from '$svg/film-solid.svg?component';

	import Collapse from './collapse.svelte';
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
		<Collapse bind:isExpanded={isExpanded}>
			<ul>
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
			</ul>
		</Collapse>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	section {
		padding: var(--spacing-xl) 0 0;
	}

	ul {
		list-style-type: none;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--spacing-sm);
		padding: 0;
		margin: 0;
	}

	@include breakpoint-xs {
		ul {
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
		background: var(--color-black);

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
</style>
