<script>
	import { onMount } from 'svelte';
	import { content, len, lines } from '$lib/content.js';
	const projects = content.projects;
	const lword = len(projects.word);
	const rotations = [-9, 6, -4, 10];
	let list;

	onMount(() => {
		window.motionKit?.scene('deal', () => {
			const looks = [...list.querySelectorAll(':scope > .col__look')];
			window.motionKit.measure(() => looks.forEach((look) => window.motionKit.set(look, {
				'--collections-pile-x': `${list.offsetWidth / 2 - (look.offsetLeft + look.offsetWidth / 2)}px`,
				'--collections-pile-y': `${looks[0].offsetHeight / 2 - (look.offsetTop + look.offsetHeight / 2)}px`
			})));
		});
	});
</script>

<section id="work" data-8b-section="collections">
	<div class="col__head">
		<p class="col__cap m-text-4">{@html lines(projects.caption).join('<br>')}</p>
		<h2 class="col__statement m-text-3" data-8b-motion="fill" data-8b-split="words">{projects.statement}</h2>
	</div>
	<div class="col__stage">
		<p class="col__word m-text-2" aria-hidden="true" style="--len:{lword}">{projects.word}</p>
		<ul class="col__looks" bind:this={list} data-8b-items=":scope > li">
			{#each projects.items as item, i}
			<li class="col__look" style="--collections-li-col-look-rotate-4-from: {rotations[i % rotations.length]}deg">
				<figure class="col__photo m-photo">
					{#if item.image}<img src={item.image} alt="{item.title}, {item.meta}" width="350" height="437" loading="lazy" />{/if}
				</figure>
				<div class="col__meta"><h3 class="m-text-4">{item.title}</h3><p class="m-text-8">{item.meta}</p></div>
				{#if item.link}<a class="col__add m-btn-2" href={item.link} target="_blank" rel="noreferrer"><span class="m-btn-2__label">View project</span></a>{/if}
			</li>
			{/each}
		</ul>
	</div>
</section>


