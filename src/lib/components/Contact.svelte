<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Form state
	let name = '';
	let email = '';
	let company = '';
	let message = '';
	let status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.from('#contact .reveal', {
			scrollTrigger: { trigger: '#contact', start: 'top 80%' },
			y: 20,
			opacity: 0,
			duration: 0.6,
			stagger: 0.1,
			ease: 'power2.out'
		});
	});

	async function handleSubmit() {
		if (!name || !email || !message) return;
		status = 'sending';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ name, email, company, message })
			});

			if (!res.ok) throw new Error();
			status = 'sent';
			name = email = company = message = '';
		} catch {
			status = 'error';
		}
	}

	const links = [
		{ key: 'email', value: 'jdr2v57@gmail.com', href: 'mailto:jdr2v57@gmail.com' },
		{
			key: 'linkedin',
			value: '/in/juan-daniel-rubio',
			href: 'https://linkedin.com/in/juan-daniel-rubio'
		},
		{ key: 'github', value: 'github.com/JdR2V', href: 'https://github.com/JdR2V' }
	];
</script>

<section id="contact" class="border-t border-border py-24">
	<div class="mx-auto max-w-5xl px-6">
		<div class="reveal mb-8 flex items-center gap-3">
			<span class="rounded border border-accent/30 px-2 py-0.5 text-xs tracking-[0.2em] text-accent"
				>04</span
			>
			<span class="text-xs tracking-[0.2em] text-text-muted uppercase">contact</span>
			<div class="from-border h-px flex-1 bg-gradient-to-r to-transparent"></div>
		</div>

		<div class="grid gap-12 md:grid-cols-2">
			<!-- Left -->
			<div>
				<h2 class="reveal mb-5 font-display text-5xl leading-[0.93] font-bold tracking-tight">
					Let's work<br /><em class="text-accent">together</em>
				</h2>
				<p class="reveal mb-8 max-w-xs text-xs leading-relaxed text-text-secondary">
					Open to remote contracts with European companies. Available immediately. CET-friendly
					hours. Comfortable with async-first workflows.
				</p>
				<div class="reveal flex flex-col">
					{#each links as link (link.href)}
						<a
							href={link.href}
							class="border-border/50 group flex items-center justify-between border-b py-3
                      text-xs transition-colors duration-150 hover:border-accent/30"
						>
							<span class="tracking-wider text-text-muted uppercase">{link.key}</span>
							<span
								class="flex items-center gap-1 text-accent/80 transition-colors group-hover:text-accent"
							>
								{link.value} <span class="text-text-muted group-hover:text-accent">↗</span>
							</span>
						</a>
					{/each}
				</div>
			</div>

			<!-- Right: form -->
			<div class="reveal flex flex-col gap-4 rounded-xl border border-border bg-bg-secondary p-7">
				<div class="grid grid-cols-2 gap-3">
					<div>
						<div class="mb-1.5 text-[9px] tracking-[0.18em] text-text-muted uppercase">
							your name
						</div>
						<input
							bind:value={name}
							type="text"
							placeholder="Anna Schmidt"
							class="w-full rounded border border-border bg-bg-primary px-3 py-2.5 text-xs text-text-secondary
                     transition-colors placeholder:text-text-muted/40 focus:border-accent/40 focus:outline-none"
						/>
					</div>
					<div>
						<div class="mb-1.5 text-[9px] tracking-[0.18em] text-text-muted uppercase">company</div>
						<input
							bind:value={company}
							type="text"
							placeholder="Acme GmbH"
							class="w-full rounded border border-border bg-bg-primary px-3 py-2.5 text-xs text-text-secondary
                     transition-colors placeholder:text-text-muted/40 focus:border-accent/40 focus:outline-none"
						/>
					</div>
				</div>

				<div>
					<div class="mb-1.5 text-[9px] tracking-[0.18em] text-text-muted uppercase">email</div>
					<input
						bind:value={email}
						type="email"
						placeholder="anna@company.de"
						class="w-full rounded border border-border bg-bg-primary px-3 py-2.5 text-xs text-text-secondary
                   transition-colors placeholder:text-text-muted/40 focus:border-accent/40 focus:outline-none"
					/>
				</div>

				<div>
					<div class="mb-1.5 text-[9px] tracking-[0.18em] text-text-muted uppercase">message</div>
					<textarea
						bind:value={message}
						rows="4"
						placeholder="We'd love to discuss a remote contract..."
						class="w-full resize-none rounded border border-border bg-bg-primary px-3 py-2.5 text-xs
                   text-text-secondary transition-colors placeholder:text-text-muted/40 focus:border-accent/40
                   focus:outline-none"
					></textarea>
				</div>

				<button
					onclick={handleSubmit}
					disabled={status === 'sending' || status === 'sent'}
					class="rounded bg-accent py-3 text-xs font-medium tracking-widest text-bg-primary
                 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
				>
					{#if status === 'idle'}
						send message →
					{:else if status === 'sending'}
						sending...
					{:else if status === 'sent'}
						sent ✓ — I'll be in touch
					{:else}
						something went wrong — try email directly
					{/if}
				</button>
			</div>
		</div>
	</div>
</section>
