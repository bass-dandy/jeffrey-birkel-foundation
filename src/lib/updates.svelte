<script lang="ts">
	import FacebookIcon from '$svg/facebook-f-brands-solid.svg?component';
	import InstagramIcon from '$svg/instagram-brands-solid.svg?component';
	import YouTubeIcon from '$svg/youtube-brands-solid.svg?component';

	import Collapse from './collapse.svelte';
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';

	const linkConfig = [
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/jfbfound',
			Icon: FacebookIcon,
		},
		{
			name: 'Instagram',
			url :'https://www.instagram.com/jfbfound/',
			Icon: InstagramIcon,
		},
		{
			name: 'YouTube',
			url :'https://www.youtube.com/@jfbfound',
			Icon: YouTubeIcon,
		},
	];

	const FOLD_IDX = 5;

	const updates = [
		{
			date: '6/14/25',
			body: "The Birkels are back on the pavement! This time, it was Matt pushing Jeff in the 4-mile SC415 (formerly Steamboat Classic) in the Birkels’ hometown of Peoria, IL. The goal was to push Jeff to a new personal record in the 4-mile, and they successfully did it with an official time of 25:06! Jeff’s previous best time was 25:18. Fun fact: it was 1 year ago this weekend that Mike & Matt told Jeff they wanted to get him back to Boston. What a year it’s been!",
		},
		{
			date: '6/10/25',
			body: "Jeff was interviewed on The Phil Luciano Show on Peoria’s WMBD 100.3 FM radio station in anticipation of the upcoming SC415 (formerly Steamboat Classic) 4-mile race on Saturday.",
		},
		{
			date: '5/25/25',
			body: 'The Birkels made it on the front page of the Peoria Journal Star Sunday newspaper. You can also read the story online at <a href="https://pjstar.com" target="__blank">pjstar.com</a>.',
		},
		{
			date: '5/21/25',
			body: 'Jeff and the boys were invited onto the ALS Matters podcast. They were hosted by Cory Mosley. Thanks to the ALS Association for supporting this podcast! <a href="https://www.youtube.com/watch?v=e3AsKrFutWg" target="__blank">Watch on YouTube</a>',
		},
		{
			date: '5/18/25',
			body: 'Jeff and Mike were asked to come back to the WCCO CBS Minneapolis studio for a live post-race interview. <a href="https://www.youtube.com/watch?v=WGAx0t3JrMk" target="__blank">Watch on YouTube</a>',
		},
		{
			date: '4/21/25',
			body: "The big day! We successfully completed the 129th Bank of America Boston Marathon. After starting 30 mins behind, Matt caught up to Mike & Jeff at mile 8. From there, they ran together. Mike pushed Jeff the entire way without walking – not even on Heartbreak Hill!<br/><br/>The crowds were amazing! We had pinned Jeff’s bib (which had his name “Jeffrey” in big bold text on it) on his blanket, and the people saw it and cheered his name. In an interview afterwards with <a href=\"https://www.bostonglobe.com/2025/04/21/sports/boston-marathon-als-runner-jeffrey-birkel/\" target=\"__blank\">The Boston Globe</a>, Jeff said, “I told myself, ‘This is what it’s going to be like when you get to Heaven and everybody’s there cheering you on… This is Heaven on Earth.’”",
		},
		{
			date: '4/18/25 - 4/20/25',
			body: 'The Birkels travelled to Boston, picked up their race packets, and had an obligatory Guinness at The Black Rose (a family tradition whenever visiting Boston). Jeff, Matt, and Mike attended the BAA Give Back charity dinner.',
		},
		{
			date: '4/8/25',
			body: 'The Boston Athletic Association awarded us two finish line tickets for having raised more than $25K by April 1st.',
		},
		{
			date: '3/31/25',
			body: 'Matt and Mike finished their final long run in the training block. Now let the taper begin!',
		},
		{
			date: '3/20/25',
			body: 'Today was Online Giving Day for the Bank of America Boston Marathon. The JFB Foundation sent $20,600 from our fundraising into our official Boston Marathon charity account, which was enough to win 2nd place overall and a $6,000 matching donation from Bank of America!',
		},
		{
			date: '3/16/25',
			body: 'WCCO CBS Minneapolis aired an 8+ minute story on us, and Mike was a live guest on their Sunday Morning news show! <a href="https://www.youtube.com/watch?v=xaXmP_DY0dE" target="__blank">Watch on YouTube</a>',
		},
		{
			date: '3/11/25',
			body: 'Jeff and the boys were featured at the ALS United - Team ALS 2025 Kick Off Zoom call, where they shared their story. <a href="https://www.youtube.com/watch?v=pavYGm6aut0" target="__blank">Watch on YouTube</a>',
		},
		{
			date: '2/2/25',
			body: 'We did a videoshoot for the Minneapolis CBS TV station WCCO for their Sunday morning news segment to be aired at a later date.',
		},
		{
			date: '1/31/25',
			body: 'KTTC Rochester TV filmed and aired our story on the 10pm news. It was also picked up by the NBC early morning national news! <a href="https://www.youtube.com/watch?v=cpp3hzKAzXM" target="__blank">Watch on YouTube</a>',
		},
		{
			date: '1/29/25',
			body: 'With a lot of help from the ALS Association’s communication team, there are two scheduled TV interviews and more in the works. Stay tuned!',
		},
		{
			date: '12/5/24',
			body: 'After interviewing with the ALS Association and entering the Boston Marathon’s raffle for getting a pushchair (“Duo Team”) bib, Mike & Jeff officially got selected as part of the Boston Marathon 2025 Duo Team field! We’re going to Boston!!',
		},
		{
			date: '11/15/24',
			body: 'The Birkel family officially got accepted into the ALS Association’s charity team for the 2025 Boston Marathon! Now, Jeff & Mike are requesting a pushchair (“Duo Team”) bib from the BAA. Finally, in December, the BAA will raffle out the Duo Team bibs they have based on which charities request Duo Team bibs.',
		},
		{
			date: '11/1/24',
			body: 'Jeff and the boys interviewed with the ALS Association. As part of applying for a charity bib, applicants must commit to a fundraising minimum of at least $10,000. The Birkels committed to donating at least $20,000 to the ALS Association, if accepted.',
		},
		{
			date: '10/31/24',
			body: 'We’re happy to report that the Foundation achieved its original goal of $20,000 to the ALS Association meeting their fundraising commitment! This exceeds the minimum fundraising requirement for a Boston Marathon charity bib of $10,000 by 2x! We’re not stopping there, though. We want to keep raising money all the way up to the marathon finish line!',
		},
		{
			date: '9/24/24',
			body: 'Matt received his official confirmation of acceptance into the Boston Marathon as an individual runner. The family has been in discussion with the ALS Association, and will be submitting an application to be part of the ALS Association’s charity team for the Boston Marathon. If accepted by the ALS Association, Jeff & Mike will then request a pushchair (“Duo Team”) bib from the BAA. Finally, the BAA will raffle out the Duo Team bibs they have based on which charities request Duo Team bibs.',
		},
		{
			date: '9/17/24',
			body: 'Jeff was invited to speak at ALS United’s Sunflower Hour and share his story. <a href="https://www.youtube.com/watch?v=LjZsrBlYs_4" target="__blank">Watch on YouTube</a>',
		},
		{
			date: '8/24/24',
			body: 'Jeff, Matt, and Mike successfully ran their Boston Marathon qualifying times! Mike pushed Jeff in 3:45 (requirement: 6:00 to be eligible for the charity program), and Matt ran solo in 2:44 (requirement: 2:55 to apply for an individual entry).',
		},
		{
			date: '8/23/24',
			body: 'Jeff and Mike interviewed with KNOP North Platte in anticipation of their Boston-qualifying attempt at the Nebraska State Fair Marathon tomorrow morning. <a href="https://www.youtube.com/watch?v=KlAgsteqJ18" target="__blank">Watch on YouTube</a>',
		},
		{
			date: '6/16/24',
			body: 'Matt & Mike broke the news to Jeff that they want to try and qualify for Boston with Jeff in a pushchair. Matt & Mike originally figured on training to qualify for Boston 2026, but due to the unpredictable progression of ALS, the family decided to instead try and qualify for Boston 2025, despite the very tight timeline to train and run a qualifying time! The family registered for the Nebraska State Fair Marathon on 8/24/24, and Matt & Mike are immediately starting an aggressive 10-week training plan.',
		},
	];

	let isExpanded = false;

	$: visibleUpdates = isExpanded ? (updates) : (updates.slice(0, FOLD_IDX));
</script>

<section>
	<ContentContainer class="updates-content">
		<SectionTitle>Updates</SectionTitle>
		You can also follow via
		<ul class="socials-list">
			{#each linkConfig as { name, url, Icon } (name)}
				<li>
					<a href={url} target="__blank" rel="noopener noreferrer">
						<Icon fill="currentColor" height="1rem" /> {name}
					</a>
				</li>
			{/each}
		</ul>
		<Collapse bind:isExpanded={isExpanded} showFade>
			<ul class="updates-list">
				{#each visibleUpdates as { date, body } (date)}
					<li>
						<h3>{date}</h3>
						<p>{@html body}</p>
					</li>
				{/each}
			</ul>
		</Collapse>
	</ContentContainer>
</section>

<style lang="scss">
	@import '../mixins.scss';

	section {
		padding: var(--spacing-xl) 0 0;
	}

	h3 {
		margin: var(--spacing-lg) 0 var(--spacing-xs);
	}

	p {
		margin: 0;
		padding: 0;
	}

	.socials-list, .updates-list {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.socials-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.socials-list a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-sm);
		padding: var(--spacing-xs) var(--spacing-lg);
		color: var(--color-secondary);
		text-decoration: none;
		border: 1px solid var(--color-secondary);
		border-radius: 5px;
	}

	.socials-list a:hover {
		background-color: var(--color-darken);
	}

	@include breakpoint-sm {
		.socials-list {
			flex-direction: row;
		}
		.socials-list a {
			justify-content: flex-start;
		}
	}
</style>
