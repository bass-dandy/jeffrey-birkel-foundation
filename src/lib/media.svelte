<script lang="ts">
	import Collapse from './collapse.svelte';
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import Article from './article.svelte';
	import Video from './video.svelte';

	let isExpanded = false;
</script>

<section>
	<ContentContainer>
		<SectionTitle>Media</SectionTitle>
		<Collapse bind:isExpanded={isExpanded}>
			<ul>
				<li>
					<Article
						title="The Phil Luciano Show: Peorian Jeffrey Birkel, an avid runner, shares incredible story of perseverance after being diagnosed with ALS in 2023"
						date="6/10/25"
						href="https://omny.fm/shows/the-phil-luciano-show/peorian-jeffrey-birkle-an-avid-runner-shares-incredible-story-of-perseverance-after-being-diagnosed-with-als-in-2023"
						thumbnail="images/media/phil-luciano.webp"
					/>
				</li>
				<li>
					<Article
						title=" Peoria Journal Star: ‘Heaven on earth’: How a Peoria native with ALS finished 2025 Boston Marathon with his sons"
						date="5/25/25"
						href="https://www.pjstar.com/story/sports/college/cross-country/2025/05/20/2025-boston-marathon-peoria-native-with-als-teams-with-sons-for-race/83688330007/"
						thumbnail="images/media/journal-star.webp"
					/>
				</li>
				<li>
					<Video
						title="ALS Matters: Episode 6 - Running the Boston Marathon as a Family"
						date="5/21/25"
						src="https://www.youtube.com/embed/e3AsKrFutWg?si=Vzk6jniIbOs9VFx_"
						facade="images/media/05-21-25-facade.jpg"
					/>
				</li>
				<li>
					<Video
						title="WCCO News: These Minnesota brothers helped their dad with ALS run the Boston Marathon, here's how"
						date="5/18/25"
						src="https://www.youtube.com/embed/WGAx0t3JrMk?si=WIFzdoTRpCwjObE3"
						facade="images/media/05-18-25-facade.jpg"
					/>
				</li>
				<li>
					<Article
						title="Boston Globe: ‘Heaven on Earth’: How one ALS patient made the Boston Marathon a family affair — and the best day of his life"
						date="4/21/25"
						href="https://www.bostonglobe.com/2025/04/21/sports/boston-marathon-als-runner-jeffrey-birkel/"
						thumbnail="images/media/boston-globe.webp"
					/>
				</li>
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
				{#if isExpanded}
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
				{/if}
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
