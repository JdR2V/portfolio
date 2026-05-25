<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Register the ScrollTrigger plugin — only needs to happen once, but
	// doing it inside the component that uses it keeps things self-contained
	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from('#about .reveal', {
			scrollTrigger: {
				trigger: '#about',
				start: 'top 80%' // start animation when section top reaches 80% of viewport
			},
			y: 24,
			opacity: 0,
			duration: 0.7,
			stagger: 0.1,
			ease: 'power2.out'
		});
	});

	const facts = [
		{ key: 'location', value: 'Cali, Colombia 🇨🇴' },
		{ key: 'timezone', value: 'UTC-5 · CET overlap ✓', accent: true },
		{ key: 'languages', value: 'Spanish · English' },
		{ key: 'stack', value: 'SvelteKit · React · Node', accent: true },
		{ key: 'background', value: 'Game dev · Multimedia' },
		{ key: 'open to', value: 'Remote EU contracts', accent: true }
	];
</script>

<section id="about" class="border-t border-border py-24">
	<div class="mx-auto max-w-5xl px-6">
		<!-- Section header -->
		<div class="reveal mb-8 flex items-center gap-3">
			<span class="rounded border border-accent/30 px-2 py-0.5 text-xs tracking-[0.2em] text-accent"
				>01</span
			>
			<span class="text-xs tracking-[0.2em] text-text-muted uppercase">about me</span>
			<div class="from-border h-px flex-1 bg-gradient-to-r to-transparent"></div>
		</div>

		<h2 class="reveal mb-8 font-display text-4xl font-bold tracking-tight">
			The person behind<br />the <em class="text-accent">code</em>
		</h2>

		<div class="grid gap-10 md:grid-cols-2">
			<!-- Text -->
			<p class="reveal text-sm leading-[2.1] text-text-secondary">
				I came up through <strong class="font-normal text-text-primary">game development</strong>
				with Unity and Godot, and studied
				<strong class="font-normal text-text-primary">multimedia production</strong>
				at university — which means I think in systems, understand 3D space, and bring genuine design
				instinct to interfaces most developers treat as purely functional.
				<br /><br />
				Today I build full-stack web applications and target
				<strong class="font-normal text-text-primary"
					>remote contracts with European companies</strong
				>, working from Cali, Colombia in a timezone that overlaps comfortably with CET. I write
				secure code by default — cybersecurity training means I think about OWASP and auth flows
				from day one.
			</p>

			<!-- Facts table -->
			<div class="reveal overflow-hidden rounded-lg border border-border bg-bg-secondary">
				{#each facts as fact (fact.key)}
					<div
						class="border-border/50 flex items-center justify-between border-b px-4 py-3 text-xs last:border-0"
					>
						<span class="tracking-wider text-text-muted uppercase">{fact.key}</span>
						<span class={fact.accent ? 'text-accent' : 'text-text-primary'}>{fact.value}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
