<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import ChevronUpIcon from '$svg/chevron-up-solid.svg?component';
	import ChevronDownIcon from '$svg/chevron-down-solid.svg?component';

	const FOLD_IDX = 3;

	const updates = [
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
		Training and fundraising have continued in earnest. You can follow Matt and Mike’s training journey on the Strava links provided at the top of the webpage. You can also follow us on social media.
		<ul class={isExpanded ? '' : 'collapsed'}>
			{#each visibleUpdates as { date, body } (date)}
				<li>
					<h3>{date}</h3>
					<p>{body}</p>
				</li>
			{/each}
		</ul>
		<div class="toggle">
			<button on:click={() => isExpanded = !isExpanded}>
				{isExpanded ? 'Show less' : 'Show more'}
				{#if isExpanded}
					<ChevronUpIcon fill="currentColor" height="0.75rem"/>
				{:else}
					<ChevronDownIcon fill="currentColor" height="0.75rem"/>
				{/if}
			</button>
		</div>
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0 0;
	}

	ul {
		position: relative;
		list-style-type: none;
		padding: 0;
		margin: 0;
		transition: height 0.5s;
	}

	ul.collapsed::after {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100px;
		background: linear-gradient(transparent, var(--color-white));
	}

	h3 {
		margin: var(--spacing-lg) 0 var(--spacing-xs);
	}

	p {
		margin: 0;
		padding: 0;
	}

	.toggle {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-md);
	}

	.toggle button {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		background: transparent;
		border: 0;
		border-radius: 5px;
		color: var(--color-secondary);
		cursor: pointer;
		font-size: 1rem;
		padding: var(--spacing-sm) var(--spacing-lg);
	}

	.toggle button:hover {
		background: var(--color-darken);
	}
</style>
