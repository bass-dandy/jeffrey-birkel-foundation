<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<section>
	<ContentContainer>
		<SectionTitle> 2025 Boston Marathon</SectionTitle>
		<p>
			We’re proud to say that the Birkels successfully qualified for and ran the 2025 Boston Marathon! What a journey! See the timeline in the Updates section, below. In short, Jeff, Matt, &amp; Mike were able to run a charity-qualifying time at the 2024 Nebraska State Fair Marathon, but that didn’t guarantee them an entry—they still needed to interview for a charity bib, get accepted, and meet fundraising requirements. And after all that, there’s still a limited number of pushchair (“Duo Team”) spots available at the Boston Marathon, and if too many apply, the BAA allocates them at random.
		</p>
		<p>
			All the pieces fell into place as we passed the ALS Association’s interview, got selected by the BAA, and were able to exceed our original fundraising goal of $20,000, thanks to all of you! Check out our <a href="https://www.youtube.com/@jfbfound/shorts" target="__blank">YouTube Shorts</a> for videos from the big day. To quote Jeff,
		</p>
		<p class="blockquote">
			I feel beyond blest, thankful, and grateful. The whole thing turned out better than I ever imagined. I thank all the people that helped make this happen. All of our donors including Bank of America, the folks at the Nebraska State Fair Boston-qualifying Marathon, the ALS Association and the Boston Athletic Association for the Duo entry, Adaptive Star for rush manufacturing our pushchair, our attorney Brennon Malcom in Cozad Nebraska for creating our 501(c)(3) pro bono, my stepson for creating and maintaining our website, and of course my boys, their wives, and my wife. This truly was a family effort that required significant sacrifice and commitment, but one given freely from the heart. We thank God for keeping our family all safe, healthy, and strong throughout this journey, and for connecting us with all these wonderful people that helped make this happen. I am and always will be grateful. I am so blessed. These are memories I will cherish forever. Thank you all!
		</p>
		<p>
			While the 2025 Boston Marathon is behind us, we’re not stopping there. We plan to continue running and raising awareness and funds for ALS! All donations go forward to ALS care, treatments, and research.
		</p>
	</ContentContainer>
</section>

<style>
	section {
		padding-top: var(--spacing-xl);
	}
	p:last-child {
		margin-bottom: 0;
	}
	.blockquote {
		padding: var(--spacing-sm);
		padding-left: var(--spacing-lg);
		background-color: var(--color-darken);
		border-left: 4px solid var(--color-accent);
		font-style: italic;
	}
</style>
