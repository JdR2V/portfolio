<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';

	onMount(() => {
		// Staggered entrance animation — each element fades up in sequence
		gsap.from('.hero-animate', {
			y: 30,
			opacity: 0,
			duration: 0.8,
			stagger: 0.15, // 150ms delay between each element
			ease: 'power2.out'
		});
	});
</script>

<section class="flex min-h-screen items-center pt-16">
	<div class="mx-auto grid w-full max-w-5xl gap-8 px-6 md:grid-cols-[1fr_280px]">
		<!-- Left: main content -->
		<div class="flex flex-col justify-center py-20">
			<div class="hero-animate mb-6 flex items-center gap-3">
				<div class="h-px w-7 bg-gradient-to-r from-accent to-transparent"></div>
				<span class="text-xs tracking-[0.2em] text-accent uppercase">
					full-stack developer · cali, colombia
				</span>
			</div>

			<h1
				class="hero-animate mb-4 font-display leading-[0.93] font-bold tracking-tight"
				style="font-size: clamp(3rem, 8vw, 5rem)"
			>
				I build<br />
				things<br />
				for the <em class="text-accent">web</em>
			</h1>

			<p
				class="hero-animate mb-10 max-w-md text-sm leading-relaxed tracking-wide text-text-secondary"
			>
				Full-stack dev with roots in <strong class="font-normal text-text-primary"
					>game development</strong
				>
				and <strong class="font-normal text-text-primary">multimedia production</strong>. Based in
				Colombia. Working with <strong class="font-normal text-text-primary">Europe</strong>.
			</p>

			<div class="hero-animate flex gap-3">
				<a
					href="#work"
					class="rounded bg-accent px-5 py-3 text-xs font-medium tracking-widest text-bg-primary"
				>
					view my work
				</a>
				<a
					href="/cv.pdf"
					class="rounded border border-border px-5 py-3 text-xs tracking-widest text-text-secondary
                 transition-colors duration-200 hover:border-accent hover:text-accent"
				>
					download cv →
				</a>
			</div>
		</div>

		<!-- Right: stats -->
		<div class="hidden flex-col border-l border-border md:flex">
			<!-- Photo placeholder -->
			<div
				class="flex flex-1 flex-col items-center justify-center gap-2 border-b border-border
                  bg-[repeating-linear-gradient(135deg,rgba(96,165,250,0.03)_0px,rgba(96,165,250,0.03)_1px,transparent_1px,transparent_14px)]"
				style="min-height: 160px"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-full border border-accent/20 text-xl"
				>
					👤
				</div>
				<span class="text-xs tracking-widest text-text-muted">[ profile photo ]</span>
			</div>

			<!-- Stat: years -->
			<div class="border-b border-border p-5">
				<div class="mb-1 font-display text-4xl text-text-primary">
					3<span class="text-xl text-accent">+</span>
				</div>
				<div class="text-xs tracking-widest text-text-muted uppercase">years building</div>
			</div>

			<!-- Stat: EU -->
			<div class="bg-bg-secondary p-5">
				<div class="mb-1 font-display text-4xl text-accent">EU</div>
				<div class="text-xs tracking-widest text-text-muted uppercase">timezone ready</div>
			</div>
		</div>
	</div>
</section>
