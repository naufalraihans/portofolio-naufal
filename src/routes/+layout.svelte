<script>
	import '../app.css';
	import { browser } from '$app/environment';
	import { kit } from '$lib/motion.js';

	// Module scope: runs once in the browser before any component mounts,
	// so child scene scripts always find window.motionKit ready.
	if (browser) kit();

	let { children } = $props();
</script>

{@render children()}
