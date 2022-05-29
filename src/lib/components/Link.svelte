<script>
	export let href;
	export let color = 'link-primary';
</script>

<a class="link link-hover {color}" {href} target="noopener">
	<slot />
</a>
