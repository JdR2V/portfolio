import { writable, derived } from 'svelte/store';

export type Language = 'en' | 'es';

// The store — starts in English, persists across navigation
export const language = writable<Language>('en');

const translations = {
	en: {
		// Nav
		nav: {
			work: 'work',
			about: 'about',
			skills: 'skills',
			contact: 'contact',
			available: 'available for hire'
		},
		// Hero
		hero: {
			eyebrow: 'full-stack developer · cali, colombia',
			title1: 'I build',
			title2: 'things',
			title3: 'for the',
			titleEm: 'web',
			desc: 'Full-stack dev with roots in game development and multimedia production. Based in Colombia. Working with Europe.',
			cta: 'view my work',
			cv: 'download cv →',
			years: 'years building',
			timezone: 'Timezone Ready'
		},
		// About
		about: {
			label: 'about me',
			title1: 'The person behind',
			title2: 'the',
			titleEm: 'code',
			body1:
				'I came up through game development with Unity and Godot, and studied multimedia production at university — which means I think in systems, understand 3D space, and bring genuine design instinct to interfaces most developers treat as purely functional.',
			body2:
				'Today I build full-stack web applications and target remote contracts with European companies, working from Cali, Colombia in a timezone that overlaps comfortably with CET. I write secure code by default — cybersecurity training means I think about OWASP and auth flows from day one.',
			facts: [
				{ key: 'location', value: 'Cali, Colombia 🇨🇴' },
				{ key: 'timezone', value: 'UTC-5 · CET overlap ✓' },
				{ key: 'languages', value: 'Spanish · English' },
				{ key: 'stack', value: 'SvelteKit · React · Node' },
				{ key: 'background', value: 'Game dev · Multimedia' },
				{ key: 'open to', value: 'Remote EU contracts' }
			]
		},
		// Work
		work: {
			label: 'selected work',
			title1: 'Projects that',
			title2: 'actually',
			titleEm: 'ship',
			featured: 'featured project',
			viewLive: 'view live project →'
		},
		// Skills
		skills: {
			label: 'skills',
			title1: 'What I work',
			title2: 'with',
			titleEm: 'daily'
		},
		// Contact
		contact: {
			label: 'contact',
			title1: "Let's work",
			titleEm: 'together',
			desc: 'Open to remote contracts. Available immediately. CET-friendly hours. Comfortable with async-first workflows.',
			nameLbl: 'your name',
			companyLbl: 'company',
			emailLbl: 'email',
			messageLbl: 'message',
			namePh: 'Anna Schmidt',
			companyPh: 'Acme GmbH',
			emailPh: 'anna@company.de',
			messagePh: "We'd love to discuss a remote contract...",
			send: 'send message →',
			sending: 'sending...',
			sent: "sent ✓ — I'll be in touch",
			error: 'something went wrong — try email directly'
		},
		// Footer
		footer: {
			built: '· built with sveltekit'
		}
	},

	es: {
		// Nav
		nav: {
			work: 'proyectos',
			about: 'sobre mí',
			skills: 'habilidades',
			contact: 'contacto',
			available: 'disponible para contratos'
		},
		// Hero
		hero: {
			eyebrow: 'desarrollador full-stack · cali, colombia',
			title1: 'Construyo',
			title2: 'cosas',
			title3: 'para la',
			titleEm: 'web',
			desc: 'Dev full-stack con raíces en desarrollo de videojuegos y producción multimedia. Basado en Colombia. Trabajando con Europa.',
			cta: 'ver mis proyectos',
			cv: 'descargar cv →',
			years: 'años desarrollando',
			timezone: 'Zona Horaria Disponible'
		},
		// About
		about: {
			label: 'sobre mí',
			title1: 'La persona detrás',
			title2: 'del',
			titleEm: 'código',
			body1:
				'Comencé en el desarrollo de videojuegos con Unity y Godot, y estudié producción multimedia en la universidad — lo que significa que pienso en sistemas, entiendo el espacio 3D y aporto instinto de diseño genuino a interfaces que la mayoría de desarrolladores tratan como puramente funcionales.',
			body2:
				'Hoy construyo aplicaciones web full-stack y busco contratos remotos con empresas europeas, trabajando desde Cali, Colombia en una zona horaria que se superpone cómodamente con CET. Escribo código seguro por defecto — mi formación en ciberseguridad significa que pienso en OWASP y flujos de autenticación desde el primer día.',
			facts: [
				{ key: 'ubicación', value: 'Cali, Colombia 🇨🇴' },
				{ key: 'zona horaria', value: 'UTC-5 · CET overlap ✓' },
				{ key: 'idiomas', value: 'Español · Inglés' },
				{ key: 'stack', value: 'SvelteKit · React · Node' },
				{ key: 'formación', value: 'Videojuegos · Multimedia' },
				{ key: 'busco', value: 'Contratos remotos en Europa' }
			]
		},
		// Work
		work: {
			label: 'proyectos seleccionados',
			title1: 'Proyectos que',
			title2: 'realmente',
			titleEm: 'salen',
			featured: 'proyecto destacado',
			viewLive: 'ver proyecto →'
		},
		// Skills
		skills: {
			label: 'habilidades',
			title1: 'Con qué trabajo',
			title2: 'a',
			titleEm: 'diario'
		},
		// Contact
		contact: {
			label: 'contacto',
			title1: 'Trabajemos',
			titleEm: 'juntos',
			desc: 'Abierto a contratos remotos. Disponible de inmediato. Horario compatible con CET. Cómodo con flujos de trabajo asíncronos.',
			nameLbl: 'tu nombre',
			companyLbl: 'empresa',
			emailLbl: 'correo',
			messageLbl: 'mensaje',
			namePh: 'Anna Schmidt',
			companyPh: 'Acme GmbH',
			emailPh: 'anna@company.de',
			messagePh: 'Me gustaría hablar sobre un contrato remoto...',
			send: 'enviar mensaje →',
			sending: 'enviando...',
			sent: 'enviado ✓ — te responderé pronto',
			error: 'algo salió mal — escríbeme directamente'
		},
		// Footer
		footer: {
			built: '· hecho con sveltekit'
		}
	}
} as const;

// Derived store — automatically updates when language changes
export const t = derived(language, ($lang) => translations[$lang]);
