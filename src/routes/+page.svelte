<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import Nav from '$lib/nav.svelte';
	import OurStory from '$lib/our-story.svelte';
	import OurStoryCont from '$lib/our-story-cont.svelte';
	import OurMission from '$lib/our-mission.svelte';
	import ToEleven from '$lib/to-eleven.svelte';
	import Section from '$lib/section.svelte';
	import Boston from '$lib/boston.svelte';
	import Updates from '$lib/updates.svelte';
	import SocialMedia from '$lib/social-media.svelte';
	import Media from '$lib/media.svelte';
	import WhatIsALS from '$lib/what-is-als.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<header>
	<Hero />
</header>
<main>
	<Nav />
	<OurStory />
	<OurStoryCont />
	<OurMission />
	<ToEleven />
	<Section title="ACT for ALS">
		Dear Family and Friends. I need your help and it will only take you a couple of minutes. There's a wonderful volunteer organization I joined called I AM ALS. Their main purpose is to raise awareness and support for ALS in Congress. They did a <a href="https://www.iamals.org/eap-jeff/" target="__blank">promotional blog on me</a> as an example of how one individual was impacted by ALS and how I benefited from the current act that is up for renewal. Here's an easy link to click that will <a href="https://www.iamals.org/reauthorize-the-act-for-als/" target="__blank">notify your senators and representatives</a> you'd like them to support the renewal of the act. If you would give your support and wouldn't mind sharing the blog with those you know I'd be very grateful. Thank you!
	</Section>
	<Section title="2026 Chicago River Swim">
		All this marathoning as a disabled team has garnered some attention as we were asked recently if I would like to participate in yet another ALS Fundraising activity. I was asked if I would be a part of the Chicago River Swim on September 20th to be towed by a very capable and past Ironman athlete, Paul Sommer, in an inflatable Kayak! I agreed and another adventure is in the works. I know many of you have have already contributed generously to the various ALS causes I've been a part of, but if you'd like to donate yet again or maybe for the first time, we do have a <a href="https://runsignup.com/jeffandpaulchicagoriverswimteam" target="__blank">fundraising page</a> already set up. This time all the funds will go for ALS Research at Northwestern University Medical Center. If you can get a corporate match though, please give through our foundation as we are set up to receive corporate matches.
	</Section>
	<Section title="2026 Rome Marathon">
		We are happy to announce ALS United Illinois has awarded Jeff and a team of four pushers a relay entry in the Rome Marathon on March 22nd! Once again we'd like to use this opportunity to continue to fundraise in support of those living with ALS and those conducting research to find a cure. Many of those we know have already given generously to this cause — between the 2025 Boston Marathon, the 2025 Peoria Walk For ALS, and the 2025 Chicago Marathon we were able to raise $61,923! Any donation to this year's cause would be greatly appreciated as well. Jeff is really digging deep into his energy reserves to try and pull off his 14th marathon (his 4th with ALS). He is so grateful for not only your financial support, but also your emotional and spiritual support. He's trying his hardest to bring some good out of what otherwise is a tough situation. It is activities like this one that helps keep him going and we'd love for as many as possible to be a part of that in any way no matter how small. Thank you!
	</Section>
	<Boston />
	<Updates />
	<SocialMedia />
	<Media />
	<WhatIsALS />
</main>
<footer>
	<Footer />
</footer>

<style>
	main {
		background: var(--color-white);
	}
</style>
