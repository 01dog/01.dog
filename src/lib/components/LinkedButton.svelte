<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [href]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { href = '', children } = $props();
</script>

<a role="button" class="btn gap-2" {href} target="noopener">
	{@render children?.()}
</a>
