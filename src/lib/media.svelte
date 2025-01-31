<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import Video from './video.svelte';
</script>

<section>
	<ContentContainer>
		<SectionTitle>Media</SectionTitle>
		<ul>
			<li>
				<Video
					title="Pushing Forward: Jeff Birkel’s Fight and Marathon Mission"
					date="9/17/24"
					src="https://www.youtube.com/embed/Yxu-3mQ_XK8?si=qFnw7hY5dV9Y1f_q"
					facade="images/sunflower-facade.jpg"
				/>
			</li>
			<li>
				<Video
					title="Man with ALS looks to qualify for Boston Marathon with two sons (KNOP)"
					date="8/23/24"
					src="https://www.youtube.com/embed/oWJOKq-2vmQ?si=C6WW1rcrNUq80v-I"
					href="https://www.knopnews2.com/2024/08/23/man-with-als-looks-qualify-boston-marathon-with-two-sons/"
					facade="images/knop-facade.jpg"
				/>
			</li>
		</ul>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	section {
		padding: var(--spacing-xl) 0 0;
	}

	ul {
		display: grid;
		grid-template-columns: 1fr;
		list-style-type: none;
		margin: 0;
		padding: 0;
		gap: var(--spacing-lg);
	}

	@include breakpoint-sm {
		ul {
			grid-template-columns: 1fr 1fr;
			gap: var(--spacing-md);
		}
	}

	li {
		margin: 0;
		padding: 0;
	}
</style>
