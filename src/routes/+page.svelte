<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Work from '$lib/components/Work.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Contact from '$lib/components/Contact.svelte';
	export const prerender = true;
</script>

<svelte:head>
	<title>Juan Daniel Rubio — Full-Stack Developer</title>
	<meta
		name="description"
		content="Full-stack developer based in Cali, Colombia. Open to remote contracts.li"
	/>
</svelte:head>

<Hero />
<About />
<Work />
<Skills />
<Contact />
