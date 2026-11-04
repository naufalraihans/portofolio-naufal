<script>
	import { content } from '$lib/content.js';
	const experience = content.experience;
	const jobs = content.jobs;
	const education = content.education;
	const research = content.research;
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

		{#if jobs.items?.length}
		<div class="cv__block">
			<h3 class="m-text-4">{jobs.heading}</h3>
			<ul class="cv__list" data-8b-items=":scope > li">
				{#each jobs.items as job}
				<li class="cv__item"><span class="studio__rule" data-8b-motion="rule" data-8b-enter="94%"></span>
					<p class="cv__period m-text-8">{job.period}</p>
					<div><h4 class="cv__role m-text-4">{job.role} · {job.company}</h4><p class="m-text-5">{job.summary}</p></div>
				</li>
				{/each}
			</ul>
		</div>
		{/if}

		{#if education.items?.length}
		<div class="cv__block">
			<h3 class="m-text-4">{education.heading}</h3>
			<ul class="cv__list" data-8b-items=":scope > li">
				{#each education.items as edu}
				<li class="cv__item"><span class="studio__rule" data-8b-motion="rule" data-8b-enter="94%"></span>
					<p class="cv__period m-text-8">{edu.period}</p>
					<div><h4 class="cv__role m-text-4">{edu.school}</h4><p class="m-text-5">{edu.detail}</p></div>
				</li>
				{/each}
			</ul>
		</div>
		{/if}

		{#if research.items?.length}
		<div class="cv__block">
			<h3 class="m-text-4">{research.heading}</h3>
			<ul class="cv__list" data-8b-items=":scope > li">
				{#each research.items as paper}
				<li class="cv__item"><span class="studio__rule" data-8b-motion="rule" data-8b-enter="94%"></span>
					<p class="cv__period m-text-8">{paper.year}</p>
					<div><h4 class="cv__role m-text-4">{paper.title}</h4><p class="m-text-5">{paper.venue}{#if paper.link} · <a class="m-link" href={paper.link} target="_blank" rel="noreferrer">Read</a>{/if}</p></div>
				</li>
				{/each}
			</ul>
		</div>
		{/if}
	</div>
</section>

