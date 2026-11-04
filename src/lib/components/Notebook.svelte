<script>
	import { content, len } from '$lib/content.js';
	const docs = content.docs;
	const l1 = len(docs.headingLine1);
	const l2 = len(docs.headingLine2);
	// Fixed grid slots (6): depth/scale/rotate per slot, matching the template's CSS positions.
	const slots = [
		{ depth: 1.4, scale: 1.04, rotate: -16.8 },
		{ depth: 0.6, scale: 0.76, rotate: 7.2 },
		{ depth: 1, scale: 0.9, rotate: -12 },
		{ depth: 1.7, scale: 1.145, rotate: 20.4 },
		{ depth: 0.5, scale: 0.725, rotate: -6 },
		{ depth: 0.8, scale: 0.83, rotate: 9.6 }
	];
</script>

<section id="notebook" data-8b-section="notebook">
	<h2 class="nb__title m-text-2"><span class="nb__line" style="--len:{l1}">{docs.headingLine1}</span> <span class="nb__line" style="--len:{l2}">{docs.headingLine2}</span></h2>
	<p class="nb__note m-text-5">{docs.note}</p>
	<ul class="nb__shots" data-8b-items=":scope > li" data-8b-fixed="6">
		{#each docs.images.slice(0, 6) as image, i}
		<li class="nb__shot" style="--notebook-depth: {slots[i].depth}; --notebook-li-nb-shot-scale-from: {slots[i].scale}; --notebook-li-nb-shot-rotate-from: {slots[i].rotate}deg">
			<figure class="m-photo">
				{#if image}<img src={image} alt="" width="300" height="300" loading="lazy" />{/if}
			</figure>
		</li>
		{/each}
	</ul>
</section>


