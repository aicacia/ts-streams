import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: true
		}),
		appDir: 'internal',
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ['self', 'http://localhost:*', 'https://*.openstreetmap.org'],
				'img-src': ['self', 'data:', 'https://*.openstreetmap.org'],
				'font-src': ['self', 'blob:', 'data:'],
				'style-src': ['self', 'unsafe-inline']
			}
		}
	}
};

export default config;
