<script>
	export let placeholder;
	export let id;
	export let name;
</script>

<input
	type="text"
	{placeholder}
	{id}
	{name}
	class="input input-bordered input-primary input-sm w-full max-w-xs"
	required
/>
