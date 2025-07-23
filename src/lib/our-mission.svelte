<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import MattedImage from './matted-image.svelte';
</script>

<section>
	<ContentContainer>
		<div class="content">
			<div class="image-wrapper">
				<MattedImage
					src="images/banner-2x.webp"
					srcset="
						images/banner-1x.webp 500w,
						images/banner-2x.webp 1000w,
						images/banner-3x.webp 1500w,
						images/banner-4x.webp 2000w
					"
					alt="the Birkel family gathered around Jeff after qualifying for the Boston Marathon"
					width="1060"
					height="447"
				/>
			</div>
			<div class="text">
				<SectionTitle>Our mission</SectionTitle>
				We started the Jeffrey F. Birkel Foundation to fundraise for the ALS Association, ALS United, and ALS research. Back in 2005, Jeff ran the Boston Marathon and helped raise funds for MPD research, a rare disease with which a dear friend and coworker had been diagnosed. Similar to MPD, ALS is also rare and underfunded. Remembering his past Boston experience and inspired by the gift of his sons pushing him in a racing wheelchair, Jeff wanted to turn this into an opportunity to raise awareness funds for ALS treatments and eventual cures.
			</div>
		</div>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		position: relative;
		gap: var(--spacing-xl);
		padding: var(--spacing-lg) 0;
	}

	@include breakpoint-sm {
		.content {
			flex-direction: row;
			align-items: center;
			gap: var(--spacing-lg);
		}
		.text, .image-wrapper {
			flex: 1;
		}
	}
</style>
