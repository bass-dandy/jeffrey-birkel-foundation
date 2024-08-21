<script lang="ts">
	import ContentContainer from './content-container.svelte';
	import SectionTitle from './section-title.svelte';
	import { sections } from './consts';

	const { id, title } = sections.whatIsALS;
</script>

<section {id}>
	<ContentContainer>
		<SectionTitle>{title}</SectionTitle>
		<div class="content">
			<p>
				Amyotrophic lateral sclerosis, also known as motor neuron disease (MND) or Lou Gehrig's disease in the United States, is a rare, terminal neurodegenerative disorder that results in the progressive loss of both upper and lower motor neurons that normally control voluntary muscle contraction. ALS often presents in its early stages with gradual muscle stiffness, twitches, weakness, and wasting. Motor neuron loss typically continues until the abilities to eat, speak, move, and, lastly, breathe are all lost. While only 15% of people with ALS also fully develop frontotemporal dementia, an estimated 50% face at least some minor difficulties with thinking and behavior.\n\nThere is no known cure for ALS. The goal of treatment is to slow the disease progression, and improve symptoms. The disease can affect people of any age, but usually starts around the age of 60. The average survival from onset to death is two to four years, though this can vary, and about 10% of those affected survive longer than ten years.
			</p>
		</div>
	</ContentContainer>
</section>

<style>
	section {
		padding: var(--spacing-xl) 0;
	}
</style>
