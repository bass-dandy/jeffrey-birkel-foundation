<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Hero from '$lib/hero.svelte';
	import OurStory from '$lib/our-story.svelte';
	import Nav from '$lib/nav.svelte';
	import WhatIsALS from '$lib/what-is-als.svelte';
	import WhyDonate from '$lib/why-donate.svelte';
</script>

<main>
	<Hero />
	<Nav />
	<img class="banner" src="images/banner.jpg" alt="" />
	<OurStory />
	<WhyDonate />
	<WhatIsALS />
	<Footer />
</main>

<style>
	main {
		background: var(--color-white);
	}

	.banner {
		width: 100%;
	}
</style>
