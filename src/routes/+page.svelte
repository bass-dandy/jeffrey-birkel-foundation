<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Hero from '$lib/hero.svelte';
	import OurStory from '$lib/our-story.svelte';
	import Nav from '$lib/nav.svelte';
	import ToEleven from '$lib/to-eleven.svelte';
	import WeNeedHelp from '$lib/we-need-help.svelte';
	import WhatIsALS from '$lib/what-is-als.svelte';
	import WhyDonate from '$lib/why-donate.svelte';
</script>

<main>
	<Hero />
	<Nav />
	<img
		class="banner"
		src="images/banner-2x.jpg"
		srcset="images/banner-1x.jpg 1000w, images/banner-2x.jpg 2000w, images/banner-3x.jpg 3000w, images/banner-4x.jpg 4000w"
		alt="Jeff, Matt, and Mike smiling in their JFB Foundation shirts. Jeff is sitting in an orange racing pushchair wearing his Guinness pajama pants while the boys are standing behind him in running shorts."
		width="2000"
		height="861"
	/>
	<OurStory />
	<WeNeedHelp />
	<WhyDonate />
	<ToEleven />
	<WhatIsALS />
	<Footer />
</main>

<style>
	main {
		background: var(--color-white);
	}

	.banner {
		display: block;
		width: 100%;
		height: auto;
	}
</style>
