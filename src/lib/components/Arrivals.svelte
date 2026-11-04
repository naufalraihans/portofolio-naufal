<script>
	import { onMount } from 'svelte';
	import { content, len } from '$lib/content.js';
	const arrivals = content.arrivals;
	const ltitle = len(arrivals.title);
	let section;

	onMount(() => {
		window.motionKit?.scene('shutter', () => {
			const photo = section.querySelector('.arr__photo');
			const img = photo.querySelector(':scope > img');
			if (!img) return;
			let strips = [];
			const build = (count) => {
				strips.forEach((strip) => strip.remove());
				strips = Array.from({ length: count }, () => {
					const strip = document.createElement('div');
					strip.className = 'arr__strip';
					strip.setAttribute('aria-hidden', 'true');
					const copy = img.cloneNode();
					copy.alt = '';
					copy.removeAttribute('loading');
					copy.removeAttribute('fetchpriority');
					strip.append(copy);
					photo.append(strip);
					return strip;
				});
			};
			window.motionKit.measure(() => {
				const count = matchMedia('(min-width: 761px)').matches ? 5 : 3;
				if (strips.length !== count) build(count);
				const width = photo.offsetWidth, step = width / count;
				strips.forEach((strip, index) => window.motionKit.set(strip, { left: `${index * step}px`, width: `${Math.ceil(step) + 1}px` }));
				strips.forEach((strip, index) => window.motionKit.set(strip.firstChild, { width: `${width}px`, left: `${-index * step}px` }));
			});
		});
	});
</script>

<section id="arrivals" bind:this={section} data-8b-section="arrivals">
	<div class="arr__stage">
		<figure class="arr__photo">
			{#if arrivals.image}<img src={arrivals.image} alt="" width="1460" height="970" loading="lazy" />{/if}
		</figure>
		<a class="arr__shop m-icon" href="#work"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span class="u-sr">See the work</span></a>
		<h2 class="arr__title m-text-2" style="--len:{ltitle}">{arrivals.title}</h2>
	</div>
	<div class="arr__foot">
		<p class="m-text-5">{arrivals.footText}</p>
		<a class="m-link" href={arrivals.footLinkHref}>{arrivals.footLink}</a>
	</div>
</section>


