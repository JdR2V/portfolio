<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	let scrolled = false;
	let menuOpen = false;

	// Add a subtle background to the nav when the user scrolls down
	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	const links = [
		{ href: '#about', label: 'about' },
		{ href: '#work', label: 'work' },
		{ href: '#skills', label: 'skills' },
		{ href: '#contact', label: 'contact' }
	];
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
	class:bg-bg-secondary={scrolled}
	class:border-b={scrolled}
	class:border-border={scrolled}
>
	<div class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
		<!-- Logo -->
		<a href="{base}/" class="font-display text-xl text-text-primary italic">
			JdR2V<span class="text-accent">.</span>Dev
		</a>

		<!-- Desktop links -->
		<ul class="hidden gap-8 text-xs tracking-widest md:flex">
			{#each links as link (link.href)}
				<li>
					<a
						href={link.href}
						class="text-text-muted transition-colors duration-200 hover:text-text-primary"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- CTA -->
		<div class="hidden items-center gap-2 text-xs tracking-wider text-accent md:flex">
			<span class="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"></span>
			available for hire
		</div>

		<!-- Mobile hamburger -->
		<button
			class="text-text-muted md:hidden"
			onclick={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
		>
			{menuOpen ? '✕' : '☰'}
		</button>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="border-t border-border bg-bg-secondary px-6 py-4 md:hidden">
			{#each links as link (link.href)}
				<a
					href={link.href}
					class="block border-b border-border py-3 text-sm text-text-secondary last:border-0 hover:text-text-primary"
					onclick={() => (menuOpen = false)}
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/if}
</nav>
