<script>
	import { onMount } from 'svelte';
	import { content, lines } from '$lib/content.js';
	const contact = content.contact;
	const site = content.site;
	let section;
	let status = $state('');

	async function submit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		if (!form.reportValidity()) return;
		// ponytail: no backend — hook Formspree/Netlify Forms here when you want real sends
		status = contact.formSent;
		form.reset();
	}

	onMount(() => {
		window.motionKit?.scene('stores', () => {
			const list = section.querySelector('.ct__stores');
			const stores = [...list.querySelectorAll(':scope > .ct__store')];
			if (!stores.length) return;
			const bar = document.createElement('div');
			bar.className = 'ct__bar';
			bar.setAttribute('aria-hidden', 'true');
			list.append(bar);
			const out = (t) => 1 - (1 - t) ** 3, inOut = (t) => (t < 0.5 ? 4 * t ** 3 : 1 - 4 * (1 - t) ** 3), into = (t) => t ** 3;
			let rows = [], steps = [];
			window.motionKit.measure(() => {
				const first = stores[0].offsetHeight, last = stores[stores.length - 1];
				rows = stores.map((store) => ({ store, top: store.offsetTop, h: store.offsetHeight }));
				window.motionKit.set(bar, { height: `${first}px` });
				steps = [{ at: 0, length: 0.5, ease: out, y: [rows[0].top, rows[0].top], s: [0, 1] }];
				rows.slice(1).forEach((row, index) => steps.push({ at: 1 + index * 1.5, length: 1, ease: inOut, y: [rows[index].top, row.top], s: [rows[index].h / first, row.h / first] }));
				const end = rows[rows.length - 1];
				steps.push({ at: stores.length * 1.5 - 0.5, length: 0.5, ease: into, y: [end.top, last.offsetTop + last.offsetHeight], s: [end.h / first, 0] });
			});
			window.motionKit.track(list, 'top 72%', 'bottom 38%', (progress) => {
				const time = progress * stores.length * 1.5;
				const step = steps.findLast((item) => time >= item.at) ?? steps[0];
				const t = step.ease(Math.min(1, (time - step.at) / step.length));
				const y = step.y[0] + (step.y[1] - step.y[0]) * t, scale = step.s[0] + (step.s[1] - step.s[0]) * t;
				window.motionKit.set(bar, { translate: `0 ${y}px`, scale: `1 ${scale}` });
				const middle = y + rows[0].h * scale / 2;
				rows.forEach((row) => row.store.classList.toggle('is-lit', scale > 0.5 && middle >= row.top && middle < row.top + row.h));
			});
		});
	});
</script>

<section id="contact" bind:this={section} data-8b-section="contact">
	<h2 class="ct__title m-text-3">{contact.title}</h2>
	<ol class="ct__stores" data-8b-items=":scope > li">
		{#each contact.places as place}
		<li class="ct__store">
			<h3 class="ct__city m-text-6">{place.city}</h3>
			<p class="ct__addr m-text-5">{@html lines(place.addr).join('<br>')}</p>
			{#if place.link}<a class="m-link" href={place.link} target="_blank" rel="noreferrer">{place.linkLabel || place.link}</a>{/if}
		</li>
		{/each}
	</ol>
	<form class="ct__form" action="#contact" onsubmit={submit} data-sent={contact.formSent}>
		<label class="m-field"><span class="m-field__label">Name</span><input class="m-field__input" type="text" name="name" autocomplete="name" required /></label>
		<label class="m-field"><span class="m-field__label">Email</span><input class="m-field__input" type="email" name="email" autocomplete="email" required /></label>
		<label class="m-field"><span class="m-field__label">Message</span><textarea class="m-field__input" name="message" rows="3" required></textarea></label>
		<button class="m-btn" type="submit"><span class="m-btn__label">Send message</span></button>
		<p class="ct__status m-text-5" role="status" aria-live="polite">{status}</p>
	</form>
</section>

