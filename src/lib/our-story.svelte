<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import { sections } from './consts';

	const { id, title, body } = sections.ourStory;
</script>

<section {id}>
	<ContentContainer>
		<SectionTitle>{title}</SectionTitle>
		<img
			src="images/our-story.jpg"
			alt="Jeff crossing the finish line at the 2005 Boston Marathon. He's smiling but he was exhausted!"
			width="735"
			height="858"
		/>
		<p>{body}</p>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	section {
		padding: var(--spacing-xl) 0;
	}

	img {
		width: 100%;
		height: auto;
	}

	p {
		padding: 0;
		margin: var(--spacing-md) 0;
		white-space: pre-wrap;
	}

	@include breakpoint-sm {
		img {
			float: right;
			width: 300px;
		}
	}
</style>
