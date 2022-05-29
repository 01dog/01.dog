<script>
	export let href = '';
</script>

<a role="button" class="btn gap-2" {href} target="noopener">
	<slot />
</a>
