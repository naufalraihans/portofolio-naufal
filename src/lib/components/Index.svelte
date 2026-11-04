<script>
	import { onMount } from 'svelte';
	import { content } from '$lib/content.js';
	const index = content.index;
	let section;

	onMount(() => {
		window.motionKit?.scene('index', () => {
			const list = section.querySelector('.idx__rows');
			const rows = [...list.querySelectorAll(':scope > .idx__row')];
			const preview = section.querySelector('.idx__preview');
			const shots = [...preview.querySelectorAll('.idx__shot')];
			if (!rows.length || !shots.length) return;
			let current = 0, fromScroll = 0, pointing = false, layer = shots.length;
			const place = () => window.motionKit.set(preview, { translate: `0 ${rows[current].offsetTop - rows[0].offsetTop}px` });
			const show = (index) => {
				if (index === current) return;
				rows[current].classList.remove('is-active');
				rows[index].classList.add('is-active');
				const shot = shots[index % shots.length];
				window.motionKit.set(shot, { 'z-index': ++layer, 'clip-path': 'inset(0% 0% 0% 0%)' });
				const shot0 = shot;
				const wipe = shot0.animate({ clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] }, { duration: 600, easing: 'cubic-bezier(0.76, 0, 0.24, 1)' });
				wipe.onfinish = () => shots.forEach((other) => { if (other !== shot0) window.motionKit.set(other, { 'clip-path': 'inset(0% 0% 100% 0%)' }); });
				window.motionKit.set(preview, { rotate: index % 2 ? '-8deg' : '8deg' });
				current = index;
				place();
			};
			window.motionKit.measure(place);
			window.motionKit.track(list, 'top 72%', 'bottom 42%', (progress) => { fromScroll = Math.min(rows.length - 1, Math.floor(progress * rows.length)); if (!pointing) show(fromScroll); });
			const enter = (event) => { const index = rows.indexOf(event.currentTarget); if (index > -1) { pointing = true; show(index); } };
			const leave = () => { pointing = false; show(fromScroll); };
			rows.forEach((row) => { row.addEventListener('pointerenter', enter); row.addEventListener('focusin', enter); });
			list.addEventListener('pointerleave', leave);
			list.addEventListener('focusout', leave);
		});
	});
</script>

<section id="index" bind:this={section} data-8b-section="index">
	<div class="idx__side">
		<p class="m-text-4">Index</p>
		<p class="m-badge">{index.badge}</p>
	</div>
	<div class="idx__body">
		<ol class="idx__rows" data-8b-items=":scope > li">
			{#each index.rows as row, i}
			<li class="idx__row" class:is-active={i === 0}>
				{#if row.link}<a class="idx__link m-link-2" href={row.link}>{row.label}</a>
				{:else}<span class="idx__link m-link-2">{row.label}</span>{/if}
			</li>
			{/each}
		</ol>
		<div class="idx__preview" aria-hidden="true" data-8b-items=":scope > figure">
			{#each index.rows.filter((r) => r.image) as row}
			<figure class="idx__shot m-photo"><img src={row.image} alt="" width="290" height="362" loading="lazy" /></figure>
			{/each}
		</div>
	</div>
</section>


