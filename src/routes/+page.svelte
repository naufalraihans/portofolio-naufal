<script>
	import Nav from '$lib/components/Nav.svelte';
	import Opening from '$lib/components/Opening.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Index from '$lib/components/Index.svelte';
	import Voice from '$lib/components/Voice.svelte';
	import Arrivals from '$lib/components/Arrivals.svelte';
	import Palette from '$lib/components/Palette.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Notebook from '$lib/components/Notebook.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { content } from '$lib/content.js';

	const site = content.site;
</script>

<svelte:head>
	<title>{site.seo.title}</title>
	<meta name="description" content={site.seo.description} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={site.seo.title} />
	<meta property="og:description" content={site.seo.description} />
	<meta property="og:url" content="https://{site.domain}/" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link rel="canonical" href="https://{site.domain}/" />
</svelte:head>

<Nav />
<main>
	<Opening />
	<Projects />
	<Index />
	<Voice />
	<Arrivals />
	<Palette />
	<Experience />
	<Notebook />
	<Faq />
	<Contact />
</main>
<Footer />
