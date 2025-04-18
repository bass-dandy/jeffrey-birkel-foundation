<script lang="ts">
	import Collapse from './collapse.svelte';
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';

	const FOLD_IDX = 4;

	const updates = [
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
			body: 'WCCO CBS Minneapolis aired an 8+ minute story on us, and Mike was a live guest on their Sunday Morning news show!',
		},
		{
			date: '2/2/25',
			body: 'We did a videoshoot for the Minneapolis CBS TV station WCCO for their Sunday morning news segment to be aired at a later date.',
		},
		{
			date: '1/31/25',
			body: 'KTTC Rochester TV filmed and aired our story on the 10pm news. It was also picked up by the NBC early morning national news!',
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
			date: '8/24/24',
			body: 'Jeff, Matt, and Mike successfully ran their Boston Marathon qualifying times! Mike pushed Jeff in 3:45 (requirement: 6:00 to be eligible for the charity program), and Matt ran solo in 2:44 (requirement: 2:55 to apply for an individual entry).',
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
		Follow us as we work our way to the 2025 Boston Marathon on 4/21/25!
		<Collapse bind:isExpanded={isExpanded} showFade>
			<ul>
				{#each visibleUpdates as { date, body } (date)}
					<li>
						<h3>{date}</h3>
						<p>{body}</p>
					</li>
				{/each}
			</ul>
		</Collapse>
	</ContentContainer>
</section>

<style>
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

	ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}
</style>
