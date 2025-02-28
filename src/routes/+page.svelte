<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Hero from '$lib/hero.svelte';
	import OurStory from '$lib/our-story.svelte';
	import Media from '$lib/media.svelte';
	import Nav from '$lib/nav.svelte';
	import ToEleven from '$lib/to-eleven.svelte';
	import OurMission from '$lib/our-mission.svelte';
	import WhatIsALS from '$lib/what-is-als.svelte';
	import WhyDonate from '$lib/why-donate.svelte';
	import Updates from '$lib/updates.svelte';
	import SocialMedia from '$lib/social-media.svelte';
</script>

<header>
	<Hero />
</header>
<main>
	<Nav />
	<OurStory />
	<OurMission />
	<WhyDonate />
	<ToEleven />
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
