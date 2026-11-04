<script>
	import { content } from '$lib/content.js';
	const palette = content.palette;
</script>

<section id="palette" data-8b-section="palette">
	<header class="pal__head">
		<h2 class="m-text-3">{palette.heading}</h2>
		<p class="m-text-5">{palette.intro}</p>
	</header>
	<ol class="pal__bands" data-8b-items=":scope > li" data-8b-fixed="5">
		{#each palette.bands as band}
		<li class="pal__band">
			<p class="pal__tag m-text-4">{band.tag}</p>
			<h3 class="pal__name">{band.name}</h3>
			<p class="pal__use m-text">{band.use}</p>
		</li>
		{/each}
	</ol>
</section>


