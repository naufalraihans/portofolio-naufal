<script>
	import { onMount } from 'svelte';
	import { content, len, lines } from '$lib/content.js';
	const hero = content.hero;
	const about = content.about;
	const l1 = len(hero.titleLine1);
	const l2 = len(hero.titleLine2);
	const lrow = len(about.brandRow);
	let section;

	onMount(() => {
		window.motionKit?.scene('opening', () => {
			const panel = section.querySelector('.hero__panel');
			const ghost = section.querySelector('.hero__ghost');
			const lens = section.querySelector('.about__lens');
			const stack = section.querySelector('.about__stack');
			const front = section.querySelector('.about__card--front');
			if (!front) return; // photos not added yet: the lens scene stays off
			const offset = (node) => { let x = 0, y = 0; while (node && node !== section) { x += node.offsetLeft; y += node.offsetTop; node = node.offsetParent; } return { x, y }; };
			window.motionKit.measure(() => {
				const p = offset(panel), centre = offset(stack), w = panel.offsetWidth, h = panel.offsetHeight, cx = p.x + w / 2, cy = p.y + h / 2;
				window.motionKit.set(section, {
					'--opening-hw': `${w / 2}px`,
					'--opening-hh': `${h / 2}px`,
					'--opening-scale': front.offsetWidth * 0.94 / w,
					'--opening-dx': `${centre.x - front.offsetWidth * 0.12 - cx}px`,
					'--opening-dy': `${centre.y + front.offsetHeight * 0.1 - cy}px`,
					'--opening-swing': `${innerWidth > 760 ? innerWidth * 0.2 - cx : 0}px`
				});
				for (const copy of [ghost, lens]) { const o = offset(copy); window.motionKit.set(copy, { '--opening-ox': `${cx - o.x}px`, '--opening-oy': `${cy - o.y}px` }); }
			});
		});
	});
</script>

<section id="opening" bind:this={section} data-8b-section="opening">
	<div class="hero">
		<div class="hero__stage">
			<div class="hero__grid" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
			<div class="hero__intro">
				{#if hero.thumbImage}
				<div class="hero__thumb" data-loop><img src={hero.thumbImage} alt="" width="300" height="300" /></div>
				{/if}
				<p class="m-text-4">{@html lines(hero.introCaption).join('<br>')}</p>
			</div>
			<div class="hero__aside">
				<p class="m-text-5">{hero.asideText}</p>
				<a class="m-btn" href="#work"><span class="m-btn__label">{hero.asideButton}</span></a>
			</div>
			<p class="hero__kicker m-text-4">{hero.kicker}</p>
			<div class="hero__type hero__type--fill">
				<h1 class="hero__title m-text-2"><span class="hero__rise"><span class="hero__line" data-line="1" style="--len:{l1}">{hero.titleLine1}</span> <span class="hero__line" data-line="2" style="--len:{l2}">{hero.titleLine2}</span></span></h1>
			</div>
			<figure class="hero__panel">
				<div class="hero__shade"></div>
				<div class="hero__frame">
					{#if hero.portraitImage}
					<img class="hero__img" data-loop src={hero.portraitImage} alt="Portrait of {content.site.name}" width="510" height="765" fetchpriority="high" />
					{/if}
				</div>
			</figure>
			<div class="hero__ghost" aria-hidden="true">
				<div class="hero__type"><p class="hero__title m-text-2"><span class="hero__rise"><span class="hero__line" data-line="1" style="--len:{l1}">{hero.titleLine1}</span> <span class="hero__line" data-line="2" style="--len:{l2}">{hero.titleLine2}</span></span></p></div>
			</div>
			<p class="hero__corner hero__corner--l m-text-4">{@html lines(hero.cornerLeft).join('<br>')}</p>
			<p class="hero__corner hero__corner--r m-text-4">{@html lines(hero.cornerRight).join('<br>')}</p>
		</div>
	</div>
	<div class="about">
		<div class="about__frame" aria-hidden="true"></div>
		<h2 class="about__statement m-text-3" data-8b-split="words">{about.statement}</h2>
		<div class="about__middle">
			<div class="about__row" aria-hidden="true"><span class="about__track m-text-2" style="--len:{lrow}">{about.brandRow}</span><span class="about__lens"><span class="about__track m-text-2" style="--len:{lrow}">{about.brandRow}</span></span></div>
			<div class="about__stack">
				{#if about.stackImageBack}<figure class="about__card about__card--back m-photo"><img src={about.stackImageBack} alt="" width="330" height="495" loading="lazy" /></figure>{/if}
				{#if about.stackImageFront}<figure class="about__card about__card--front m-photo"><img src={about.stackImageFront} alt="" width="310" height="388" loading="lazy" /></figure>{/if}
			</div>
		</div>
		<p class="about__note m-text-5">{about.note}</p>
	</div>
</section>


