import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build', // output folder
			assets: 'build',
			fallback: '404.html',
			precompress: false
		}),
		paths: {
			// IMPORTANT: replace 'portfolio' with your actual repo name
			// This is needed because GitHub Pages serves from /repo-name/ not /
			base: process.env.NODE_ENV === 'production' ? '/portfolio' : ''
		}
	}
};

export default config;
