<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [form]
	 * @property {import('svelte').Snippet} [info]
	 */

	/** @type {Props} */
	let { form, info } = $props();
</script>

<div class="flex flex-col w-full lg:flex-row">
	<div class="grid basis-1/2 h-fit card bg-base-300 rounded-box place-items-center">
		{#if form}{@render form()}{:else}no form provided{/if}
	</div>
	<div class="divider lg:divider-horizontal"></div>
	<div class="grid basis-1/2 h-fit card bg-base-300 rounded-box place-items-center">
		{#if info}{@render info()}{:else}no info provided{/if}
	</div>
</div>
