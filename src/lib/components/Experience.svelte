<script>
	import { content } from '$lib/content.js';
	import { tilt } from '$lib/tilt.js';

	const experience = content.experience;
	const jobs = content.jobs;
	const education = content.education;
	const research = content.research;

	const groups = [
		{ key: 'jobs', heading: jobs.heading, items: (jobs.items ?? []).map((job) => ({ meta: job.period, title: job.role, sub: job.company, body: job.summary })) },
		{ key: 'education', heading: education.heading, items: (education.items ?? []).map((edu) => ({ meta: edu.period, title: edu.school, sub: '', body: edu.detail })) },
		{ key: 'research', heading: research.heading, items: (research.items ?? []).map((paper) => ({ meta: paper.year, title: paper.title, sub: paper.venue, body: '', link: paper.link })) }
	].filter((group) => group.items.length);
</script>

<section id="about" data-8b-section="studio">
	<figure class="studio__photo m-photo" data-8b-motion="drop" style="--drop-rotate-to: -2deg" data-8b-enter="92%">
		{#if experience.image}<img src={experience.image} alt="" width="800" height="640" loading="lazy" />{/if}
	</figure>
	<div class="studio__text">
		<h2 class="studio__title m-text-7" data-8b-motion="fill" data-8b-split="words">{experience.statement}</h2>
		<p class="m-text">{experience.body}</p>
		<ul class="studio__facts" data-8b-items=":scope > li">
			{#each experience.facts as fact}
			<li class="studio__fact"><span class="studio__rule" data-8b-motion="rule" data-8b-enter="94%"></span><h3 class="m-text-4">{fact.title}</h3><p class="m-text-5">{fact.text}</p></li>
			{/each}
		</ul>
	</div>

	<div class="cv">
		{#each groups as group (group.key)}
		<div class="cv__block">
			<h3 class="cv__heading m-text-4">{group.heading}<span class="cv__count">{String(group.items.length).padStart(2, '0')}</span></h3>
			<ul class="cv__grid" data-8b-items=":scope > li">
				{#each group.items as item}
				<li class="cv__card" use:tilt>
					<div class="cv__body">
						<p class="cv__period">{item.meta}</p>
						<h4 class="cv__title">{item.title}</h4>
						{#if item.sub}<p class="cv__org">{item.sub}</p>{/if}
						{#if item.body}<p class="cv__text">{item.body}</p>{/if}
						{#if item.link}<a class="cv__link" href={item.link} target="_blank" rel="noreferrer">Read<span aria-hidden="true">↗</span></a>{/if}
					</div>
					<span class="cv__glare" aria-hidden="true"></span>
				</li>
				{/each}
			</ul>
		</div>
		{/each}
	</div>
</section>
