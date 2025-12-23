<script>
	let { placeholder, id, name } = $props();
</script>

<input
	type="text"
	{placeholder}
	{id}
	{name}
	class="input input-bordered input-primary input-sm w-full max-w-xs"
	required
/>
