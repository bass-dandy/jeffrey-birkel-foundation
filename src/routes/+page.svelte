<script lang="ts">
	import Footer from '$lib/footer.svelte';
	import Hero from '$lib/hero.svelte';
	import MyStory from '$lib/my-story.svelte';
	import Nav from '$lib/nav.svelte';
	import WhatIsALS from '$lib/what-is-als.svelte';
	import WhyDonate from '$lib/why-donate.svelte';
</script>

<main>
	<Hero />
	<Nav />
	<img class="banner" src="images/banner.jpg" alt="" />
	<MyStory />
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
