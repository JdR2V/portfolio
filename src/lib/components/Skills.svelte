<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { t } from '$lib/stores/language';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#skills .reveal', {
			scrollTrigger: { trigger: '#skills', start: 'top 80%' },
			y: 20,
			opacity: 0,
			duration: 0.6,
			stagger: 0.08,
			ease: 'power2.out'
		});
	});

	const columns = [
		{
			title: 'frontend',
			color: 'text-accent',
			skills: [
				{ name: 'SvelteKit', level: 4 },
				{ name: 'React + TypeScript', level: 5 },
				{ name: 'Three.js', level: 3 },
				{ name: 'GSAP', level: 4 },
				{ name: 'Tailwind CSS', level: 5 }
			]
		},
		{
			title: 'backend',
			color: 'text-pink-400',
			skills: [
				{ name: 'Node.js + Express', level: 4 },
				{ name: 'PostgreSQL', level: 3 },
				{ name: 'Prisma ORM', level: 3 },
				{ name: 'REST APIs', level: 5 },
				{ name: 'Auth / JWT', level: 3 }
			]
		},
		{
			title: 'tools & other',
			color: 'text-purple-400',
			skills: [
				{ name: 'Git + GitHub', level: 5 },
				{ name: 'Docker', level: 2 },
				{ name: 'GitHub Actions', level: 4 },
				{ name: 'Unity / Godot', level: 4 },
				{ name: 'Figma', level: 4 }
			]
		}
	];
</script>

<section id="skills" class="border-t border-border py-24">
	<div class="mx-auto max-w-5xl px-6">
		<div class="reveal mb-8 flex items-center gap-3">
			<span class="rounded border border-accent/30 px-2 py-0.5 text-xs tracking-[0.2em] text-accent"
				>03</span
			>
			<span class="text-xs tracking-[0.2em] text-text-muted uppercase">{$t.skills.label}</span>
			<div class="from-border h-px flex-1 bg-gradient-to-r to-transparent"></div>
		</div>

		<h2 class="reveal mb-10 font-display text-4xl font-bold tracking-tight">
			{$t.skills.title1}<br />{$t.skills.title2} <em class="text-accent">{$t.skills.titleEm}</em>
		</h2>

		<div class="grid gap-4 md:grid-cols-3">
			{#each columns as col (col.title)}
				<div class="reveal rounded-xl border border-border bg-bg-secondary p-5">
					<div
						class="text-xs tracking-widest {col.color} mb-4 flex items-center gap-2
                      border-b border-border pb-3"
					>
						<span class="h-1.5 w-1.5 rounded-full bg-current"></span>
						{col.title}
					</div>
					{#each col.skills as skill (skill.name)}
						<div
							class="border-border/40 flex items-center justify-between border-b py-1.5 text-xs text-text-secondary last:border-0"
						>
							<span>{skill.name}</span>
							<!-- Pip indicators: filled = comfortable, half = learning, empty = aware -->
							<div class="flex gap-1">
								{#each Array(5) as _, i}
									<div
										class="h-0.5 w-3 rounded-full {i < skill.level ? 'bg-accent' : 'bg-border'}"
									></div>
								{/each}
							</div>
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
