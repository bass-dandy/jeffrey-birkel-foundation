<script lang="ts">
	import ArrowUpRightFromSquare from '$svg/arrow-up-right-from-square-solid.svg?component';
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<section>
	<ContentContainer>
		<SectionTitle>Media</SectionTitle>
		<h3>
			<a
				href="https://www.knopnews2.com/2024/08/23/man-with-als-looks-qualify-boston-marathon-with-two-sons/"
				target="_blank"
				rel="noopener noreferrer"
			>
				KNOP News: Man with ALS looks to qualify for Boston Marathon with two sons
				<ArrowUpRightFromSquare
					fill="currentColor"
					height="1rem"
					style="margin-left: var(--spacing-xs); position: relative; top: 2px;"
				/>
			</a>
		</h3>
		<div class="video">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/oWJOKq-2vmQ?si=C6WW1rcrNUq80v-I"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			/>
		</div>
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0 0;
	}

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
	}

	iframe {
		width: 100%;
		height: 100%;
	}
</style>
