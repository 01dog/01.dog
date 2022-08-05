// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
        resolve: {
                alias: {
                        '$api': path.resolve('./api')
                }
        },
        plugins: [sveltekit()]
};

export default config;