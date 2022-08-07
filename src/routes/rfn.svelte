<script context="module">
	import Divider from '$lib/components/Divider.svelte';
	import RFNForm from '$lib/components/rfn/RFNForm.svelte';
	import RFNInfo from '$lib/components/rfn/RFNInfo.svelte';
</script>

<div class="mb-4 text-center font-bold">
	<h1 class="text-5xl">walgreens RFN finder</h1>
	<h5 class="text-m italic">no receipt? no problem!</h5>
	<h6 class="text-sm">questions/comments contact: wmercer[at]pm.me</h6>
</div>

<Divider>
	<RFNForm slot="form" />
	<RFNInfo slot="info" />
</Divider>
