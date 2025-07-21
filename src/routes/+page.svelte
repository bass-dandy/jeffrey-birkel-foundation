<script lang="ts">
	import Hero from '$lib/hero.svelte';
	import Nav from '$lib/nav.svelte';
	import OurStory from '$lib/our-story.svelte';
	import OurStoryCont from '$lib/our-story-cont.svelte';
	import OurMission from '$lib/our-mission.svelte';
	import ToEleven from '$lib/to-eleven.svelte';
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
