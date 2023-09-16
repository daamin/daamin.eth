import { vitePreprocess } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			strict: false,
			assets: 'build',
			pages: 'build'
		}),
		paths: {
			relative: true
		}
	},

	preprocess: [vitePreprocess({})]
};

export default config;
