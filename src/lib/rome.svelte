<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
</script>

<section>
	<ContentContainer>
		<SectionTitle> 2026 Rome Marathon</SectionTitle>
		We are happy to announce ALS United Illinois has awarded Jeff and a team of four pushers a relay entry in the Rome Marathon on March 22nd! Once again we'd like to use this opportunity to continue to fundraise in support of those living with ALS and those conducting research to find a cure. Many of those we know have already given generously to this cause — between the 2025 Boston Marathon, the 2025 Peoria Walk For ALS, and the 2025 Chicago Marathon we were able to raise $61,923! Any donation to this year's cause would be greatly appreciated as well. Jeff is really digging deep into his energy reserves to try and pull off his 14th marathon (his 4th with ALS). He is so grateful for not only your financial support, but also your emotional and spiritual support. He's trying his hardest to bring some good out of what otherwise is a tough situation. It is activities like this one that helps keep him going and we'd love for as many as possible to be a part of that in any way no matter how small. Thank you!
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
