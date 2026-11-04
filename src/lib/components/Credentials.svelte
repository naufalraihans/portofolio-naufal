<script>
	import { content } from '$lib/content.js';
	import { tilt } from '$lib/tilt.js';

	const data = content.credentials;
	const awards = data.awards?.items ?? [];
	const certs = data.certifications?.items ?? [];
	const orgs = data.organisations?.items ?? [];
	const languages = data.languages ?? [];
</script>

<section id="credentials" data-8b-section="credentials">
	<header class="cr__head">
		<p class="m-text-4 cr__cap">Record</p>
		<h2 class="cr__title m-text-7" data-8b-motion="fill" data-8b-split="words">{data.statement}</h2>
		<p class="m-badge">{data.badge}</p>
	</header>

	{#if awards.length}
	<h3 class="cr__heading m-text-4">{data.awards.heading}<span class="cr__count">{String(awards.length).padStart(2, '0')}</span></h3>
	<ul class="cr__awards" data-8b-items=":scope > li">
		{#each awards as award}
		<li class="cr__card cr__card--award" use:tilt>
			<div class="cr__body">
				<p class="cr__place">{award.place}</p>
				<h4 class="cr__name">{award.title}</h4>
				<p class="cr__issuer">{award.issuer}</p>
				<p class="cr__date">{award.date}</p>
			</div>
			<span class="cv__glare" aria-hidden="true"></span>
		</li>
		{/each}
	</ul>
	{/if}

	{#if certs.length}
	<h3 class="cr__heading m-text-4">{data.certifications.heading}<span class="cr__count">{String(certs.length).padStart(2, '0')}</span></h3>
	<ul class="cr__certs" data-8b-items=":scope > li">
		{#each certs as cert}
		<li class="cr__card" use:tilt>
			<div class="cr__body">
				<p class="cr__date">{cert.year}</p>
				<h4 class="cr__name">{cert.title}</h4>
				<p class="cr__issuer">{cert.issuer}</p>
				{#if cert.id}<p class="cr__id">ID {cert.id}</p>{/if}
			</div>
			<span class="cv__glare" aria-hidden="true"></span>
		</li>
		{/each}
	</ul>
	{/if}

	<div class="cr__foot">
		{#if orgs.length}
		<div class="cr__orgs">
			<h3 class="cr__heading m-text-4">{data.organisations.heading}<span class="cr__count">{String(orgs.length).padStart(2, '0')}</span></h3>
			<ul data-8b-items=":scope > li">
				{#each orgs as org}
				<li class="cr__org">
					<p class="cr__name">{org.name}</p>
					<p class="cr__issuer">{org.role}{#if org.period} · {org.period}{/if}</p>
				</li>
				{/each}
			</ul>
		</div>
		{/if}
		{#if languages.length}
		<div class="cr__langs">
			<h3 class="cr__heading m-text-4">Languages</h3>
			<ul>
				{#each languages as lang}
				<li class="cr__org"><p class="cr__name">{lang.name}</p><p class="cr__issuer">{lang.level}</p></li>
				{/each}
			</ul>
		</div>
		{/if}
	</div>
</section>
