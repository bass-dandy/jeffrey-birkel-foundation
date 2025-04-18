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
					title="How a Minnesota son is helping his father run the Boston Marathon"
					date="3/16/25"
					src="https://www.youtube.com/embed/HHkp_w9TJ-o?si=fWlkyHywHJMDzoAo"
					facade="images/cbs-facade.png"
					link={{
						href: 'https://www.cbsnews.com/minnesota/video/how-a-minnesota-son-is-helping-his-father-run-the-boston-marathon/',
						text: 'full story on CBS',
					}}
				/>
			</li>
			<li>
				<Video
					title="ALS United: Team ALS 2025 Kickoff - Birkel Family Story"
					date="3/11/25"
					src="https://www.youtube.com/embed/pavYGm6aut0?si=-l23zj_yEkxjmpob"
					facade="images/als-united-kickoff-facade.png"
				/>
			</li>
			<li>
				<Video
					title="Father diagnosed with ALS and son prepare for Boston Marathon"
					date="1/31/25"
					src="https://www.youtube.com/embed/cpp3hzKAzXM?si=-HZ5aptRAk-gK8lb"
					facade="images/kttc-facade.png"
					link={{
						href: 'https://www.kttc.com/2025/02/01/father-diagnosed-with-als-son-prepare-boston-marathon/',
						text: 'full story on KTTC',
					}}
				/>
			</li>
			<li>
				<Video
					title="Pushing Forward: Jeff Birkel’s Fight and Marathon Mission"
					date="9/17/24"
					src="https://www.youtube.com/embed/LjZsrBlYs_4?si=_dF383VqecjNJ230"
					facade="images/sunflower-facade.jpg"
				/>
			</li>
			<li>
				<Video
					title="Man with ALS looks to qualify for Boston Marathon with two sons"
					date="8/23/24"
					src="https://www.youtube.com/embed/KlAgsteqJ18?si=QG0VEP451Q_bblJb"
					facade="images/knop-facade.jpg"
					link={{
						href: 'https://www.knopnews2.com/2024/08/23/man-with-als-looks-qualify-boston-marathon-with-two-sons/',
						text: 'full story on KNOP',
					}}
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
