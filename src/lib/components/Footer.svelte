<script>
	import { content, len } from '$lib/content.js';
	const site = content.site;
	const lmark = len(site.shortName);
	let status = $state('');

	async function submit(event) {
		event.preventDefault();
		const form = event.currentTarget;
		if (!form.reportValidity()) return;
		// ponytail: no backend — hook a mailing-list provider here when you want real signups
		status = 'You are on the list. New work lands in your inbox first.';
		form.reset();
	}
</script>

<footer id="footer" data-8b-section="footer">
	<div class="ft__top">
		<form class="ft__news" action="#footer" onsubmit={submit}>
			<h2 class="m-text-7">First look at every build</h2>
			<div class="ft__row">
				<label class="m-field"><span class="m-field__label">Email</span><input class="m-field__input" type="email" name="email" autocomplete="email" required /></label>
				<button class="m-btn-2" type="submit"><span class="m-btn-2__label">Sign up</span></button>
			</div>
			<p class="ft__status m-text-8" role="status" aria-live="polite">{status}</p>
		</form>
		<nav class="ft__cols" aria-label="Footer">
			<ul data-8b-items=":scope > li">
				<li><a class="m-link" href="#work">Work</a></li>
				<li><a class="m-link" href="#index">Index</a></li>
				<li><a class="m-link" href="#arrivals">New arrivals</a></li>
				<li><a class="m-link" href="#palette">The stack</a></li>
			</ul>
			<ul data-8b-items=":scope > li">
				<li><a class="m-link" href="#about">About</a></li>
				<li><a class="m-link" href="#faq">FAQ</a></li>
				<li><a class="m-link" href="#contact">Contact</a></li>
				<li><a class="m-link" href="mailto:{site.email}">{site.email}</a></li>
			</ul>
			<ul data-8b-items=":scope > li">
				{#each site.social as link}
				<li><a class="m-link" href={link.href} target="_blank" rel="noreferrer">{link.label}</a></li>
				{/each}
			</ul>
		</nav>
	</div>
	<span class="ft__rule" data-8b-motion="rule" data-8b-enter="94%"></span>
	<p class="ft__mark m-text-2" aria-hidden="true" style="--len:{lmark}">{site.shortName}</p>
	<div class="ft__legal">
		<p class="m-text-8">© 2026 {site.name} · {site.domain} · Design: <a href="https://8b.com/" style="color:inherit" data-8b-credit>8B</a></p>
		<p class="m-text-8">{site.tagline}</p>
	</div>
</footer>

