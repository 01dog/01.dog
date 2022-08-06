<script context="module">
	import Divider from '$lib/components/Divider.svelte';
	import RFNForm from '$lib/components/rfn/RFNForm.svelte';
	import RFNInfo from '$lib/components/rfn/RFNInfo.svelte';
</script>

<h1 class="text-5xl font-bold text-center mb-4">walgreens RFN finder</h1>
<h5 class="text-m font-bold italic text-center mb-4">no receipt? no problem!</h5>

<Divider>
	<RFNForm slot="form" />
	<RFNInfo slot="info" />
</Divider>
