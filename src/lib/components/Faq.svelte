<script>
	import { content } from '$lib/content.js';
	const faq = content.faq;
</script>

<section id="faq" data-8b-section="faq">
	<div class="faq__side">
		<h2 class="m-text-7">{faq.heading}</h2>
		<p class="m-text-5">{faq.intro}</p>
		<a class="m-link" href="#contact">{faq.contactLink}</a>
	</div>
	<div class="faq__list" data-8b-items=":scope > details">
		{#each faq.items as item}
		<details class="faq__item"><summary><span class="faq__rule" data-8b-motion="rule" data-8b-enter="94%"></span>{item.q}</summary><p class="faq__answer m-text">{item.a}</p></details>
		{/each}
	</div>
</section>

