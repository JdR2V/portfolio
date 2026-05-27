<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { t } from '$lib/stores/language';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#work .reveal', {
			scrollTrigger: { trigger: '#work', start: 'top 80%' },
			y: 24,
			opacity: 0,
			duration: 0.7,
			stagger: 0.12,
			ease: 'power2.out'
		});
	});

	// ── Replace these with your real projects as you build them ──────────────
	const projects = [
		{
			num: '001',
			featured: true,
			title: 'Full-Stack Web Application',
			desc: 'Complete application with user auth, REST API, PostgreSQL database, and automated CI/CD pipeline. Built end-to-end to demonstrate full-stack capability for European clients.',
			tags: ['SvelteKit', 'Node.js', 'TypeScript', 'PostgreSQL', 'Railway'],
			url: '#',
			live: '#'
		},
		{
			num: '002',
			title: 'Color Palette Generator',
			desc: 'Color theory engine generating harmonious palettes (complementary, triadic, analogous, and more) from any base color. Export to CSS, Tailwind, JSON tokens.',
			tags: ['React', 'TypeScript', 'Canvas API'],
			url: 'https://github.com/JdR2V/color-palette-generator',
			live: 'https://jdr2v.github.io/color-palette-generator/'
		},
		{
			num: '003',
			title: 'Drawing Ideas Generator',
			desc: 'A web app that generates drawing ideas using AI and user preferences.',
			tags: ['React', 'GSAP', 'Vite'],
			url: 'https://github.com/JdR2V/Drawing-Idea-Generator',
			live: '#'
		}
	];
</script>

<section id="work" class="border-t border-border bg-bg-secondary/30 py-24">
	<div class="mx-auto max-w-5xl px-6">
		<div class="reveal mb-8 flex items-center gap-3">
			<span class="rounded border border-accent/30 px-2 py-0.5 text-xs tracking-[0.2em] text-accent"
				>02</span
			>
			<span class="text-xs tracking-[0.2em] text-text-muted uppercase">{$t.work.label}</span>
			<div class="from-border h-px flex-1 bg-gradient-to-r to-transparent"></div>
		</div>

		<h2 class="reveal mb-10 font-display text-4xl font-bold tracking-tight">
			{$t.work.title1}<br />{$t.work.title2} <em class="text-accent">{$t.work.titleEm}</em>
		</h2>

		<!-- Featured project -->
		{#each projects.filter((p) => p.featured) as project (project.num)}
			<div class="reveal mb-4 grid overflow-hidden rounded-xl border border-border md:grid-cols-2">
				<!-- Thumbnail -->
				<div
					class="relative
                    flex min-h-48 items-center justify-center border-r border-border bg-[repeating-linear-gradient(45deg,rgba(96,165,250,0.025)_0px,rgba(96,165,250,0.025)_1px,transparent_1px,transparent_14px)]"
				>
					<span
						class="absolute top-3 left-3 rounded border border-accent/30 bg-accent/5 px-2
                       py-0.5 text-xs tracking-wider text-accent">{$t.work.featured}</span
					>
					<span class="text-xs tracking-widest text-text-muted">[ screenshot ]</span>
				</div>
				<!-- Info -->
				<div class="flex flex-col justify-between gap-4 p-7">
					<div>
						<div class="mb-2 text-xs tracking-widest text-text-muted">
							{project.num} — featured project
						</div>
						<h3 class="mb-3 font-display text-2xl text-text-primary">{project.title}</h3>
						<p class="mb-4 text-xs leading-relaxed text-text-secondary md:text-base">
							{project.desc}
						</p>
						<div class="flex flex-wrap gap-1.5">
							{#each project.tags as tag (tag)}
								<span
									class="rounded-full border border-accent/30 bg-accent/5 px-2 py-0.5 text-[10px] tracking-wider text-accent"
									>{tag}</span
								>
							{/each}
						</div>
					</div>
					<a
						href={project.live}
						class="flex items-center gap-2 text-xs tracking-widest text-accent"
					>
						{$t.work.viewLive} →
					</a>
				</div>
			</div>
		{/each}

		<!-- Other projects -->
		<div class="grid gap-4 md:grid-cols-2">
			{#each projects.filter((p) => !p.featured) as project (project.num)}
				<div
					class="reveal group relative rounded-xl border border-border p-6 transition-colors duration-200 hover:border-accent/30"
				>
					<a
						href={project.url}
						class="absolute top-4 right-4 text-text-muted transition-colors group-hover:text-accent"
						>↗</a
					>
					<div class="mb-2 text-xs tracking-widest text-text-muted">{project.num}</div>
					<h3 class="mb-2 font-display text-xl text-text-primary">{project.title}</h3>
					<p class="mb-4 text-xs leading-relaxed text-text-secondary md:text-base">
						{project.desc}
					</p>
					<div class="flex flex-wrap gap-1.5">
						{#each project.tags as tag (tag)}
							<span
								class="rounded-full border border-border px-2 py-0.5 text-[10px] tracking-wider text-text-muted"
								>{tag}</span
							>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
