<script>
	import { content } from '$lib/content.js';
	const voice = content.voice;
</script>

<section id="voice" data-8b-section="voice">
	<div class="voice__media">
		<figure class="voice__photo m-photo" data-8b-motion="drop" style="--drop-rotate-to: 0deg" data-8b-enter="92%">
			{#if voice.image}<img src={voice.image} alt="" width="440" height="440" loading="lazy" />{/if}
		</figure>
		<svg class="voice__burst" data-loop viewBox="0 0 64 64" aria-hidden="true"><g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M32 4v16M32 44v16M4 32h16M44 32h16M12 12l11 11M41 41l11 11M52 12 41 23M23 41 12 52M19 6l6 15M39 43l6 15M58 19l-15 6M21 39 6 45M45 6l-6 15M25 43l-6 15M58 45l-15-6M21 25 6 19"/></g></svg>
	</div>
	<blockquote class="voice__quote">
		<p class="m-text-7" data-8b-motion="fill" data-8b-split="words">{voice.quote}</p>
		<footer class="voice__who m-text-4">{voice.who}</footer>
	</blockquote>
</section>


