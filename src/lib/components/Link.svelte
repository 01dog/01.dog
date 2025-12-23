<script>
	/**
	 * @typedef {Object} Props
	 * @property {any} href
	 * @property {string} [color]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { href, color = 'link-primary', children } = $props();
</script>

<a class="link link-hover {color}" {href} target="noopener">
	{@render children?.()}
</a>
