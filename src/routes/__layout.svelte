<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Nav />

<div class="container max-w-3x1 mx-auto px-4 sm:px-6 lg:px-8">
	<slot />
</div>

<Footer />
