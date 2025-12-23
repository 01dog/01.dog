<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<Nav />

<div class="container max-w-3x1 mx-auto px-4 sm:px-6 lg:px-8 mb-10 rounded-lg">
	{@render children?.()}
</div>

<Footer />
