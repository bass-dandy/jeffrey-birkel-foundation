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
					title="KNOP News: Man with ALS looks to qualify for Boston Marathon with two sons"
					src="https://www.youtube.com/embed/oWJOKq-2vmQ?si=C6WW1rcrNUq80v-I"
					href="https://www.knopnews2.com/2024/08/23/man-with-als-looks-qualify-boston-marathon-with-two-sons/"
					facade="images/knop-facade.jpg"
				/>
			</li>
			<li>
				<Video
					title="Pushing Forward: Jeff Birkel’s Fight and Marathon Mission"
					src="https://www.youtube.com/embed/Yxu-3mQ_XK8?si=qFnw7hY5dV9Y1f_q"
					facade="images/sunflower-facade.jpg"
				/>
			</li>
		</ul>
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0 0;
	}

	ul {
		display: flex;
		flex-direction: column;
		list-style-type: none;
		margin: 0;
		padding: 0;
		gap: var(--spacing-lg);
	}

	li {
		margin: 0;
		padding: 0;
	}
</style>
