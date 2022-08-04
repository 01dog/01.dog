<script context="module">
	import Divider from '$lib/components/Divider.svelte';
	import RFNForm from '$lib/components/rfn/RFNForm.svelte';
	import RFNInfo from '$lib/components/rfn/RFNInfo.svelte';
</script>

<Divider>
	<RFNForm slot="form" />
	<RFNInfo slot="info" />
</Divider>
