<script>
	import { content } from '$lib/content.js';
	const site = content.site;
	let open = $state(false);
	let last = 0;
	let hidden = $state(false);

	function onScroll() {
		const y = scrollY;
		if (y > last + 2 && y > 160) hidden = true;
		else if (y < last - 2 || y <= 160) hidden = false;
		last = y;
	}
	function setOpen(v) {
		open = v;
		if (v) window.motionKit?.wheel?.stop();
		else window.motionKit?.wheel?.start();
	}
</script>

<svelte:window onscroll={onScroll} onkeydown={(e) => { if (e.key === 'Escape' && open) setOpen(false); }} />

<header id="nav" class:hidden={hidden} data-8b-section="navigation">
	<div class="nav__bar l-wrap">
		<a class="nav__logo" href="#opening" aria-label="{site.name}, back to the top">
			<svg viewBox="0 0 30 22" aria-hidden="true"><path d="M0 0h13l-6 11h6L7 22H0l6-11H0z M17 0h13l-6 11h6l-6 11h-7l6-11h-6z" fill="currentColor"/></svg>
			<span>{site.shortName}</span>
		</a>
		<nav aria-label="Main">
			<ul class="nav__links" data-8b-items=":scope > li">
				<li><a class="m-link" href="#work">Work</a></li>
				<li><a class="m-link" href="#about">About</a></li>
				<li><a class="m-link" href="#credentials">Record</a></li>
				<li><a class="m-link" href="#contact">Contact</a></li>
			</ul>
		</nav>
		<div class="nav__tools">
			<a class="m-icon" href="#index"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15.5 15.5 21 21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="u-sr">Browse the index</span></a>
			<a class="m-icon" href="#contact"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8h14l-1.2 12H6.2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 8V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="2"/></svg><span class="u-sr">Contact</span></a>
			<button class="m-icon nav__menu" type="button" aria-expanded={open} aria-controls="nav-sheet" onclick={() => setOpen(true)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="u-sr">Open menu</span></button>
		</div>
	</div>
	{#if open}
	<div class="nav__sheet is-open" id="nav-sheet" role="dialog" aria-modal="true" aria-label="Menu">
		<button class="m-icon nav__close" type="button" onclick={() => setOpen(false)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><span class="u-sr">Close menu</span></button>
		<ul>
			<li><a class="m-link-2" href="#work" onclick={() => setOpen(false)}>Work</a></li>
			<li><a class="m-link-2" href="#index" onclick={() => setOpen(false)}>Index</a></li>
			<li><a class="m-link-2" href="#about" onclick={() => setOpen(false)}>About</a></li>
			<li><a class="m-link-2" href="#credentials" onclick={() => setOpen(false)}>Record</a></li>
			<li><a class="m-link-2" href="#contact" onclick={() => setOpen(false)}>Contact</a></li>
		</ul>
		<p class="m-text-4">{site.tagline}</p>
	</div>
	{/if}
</header>

