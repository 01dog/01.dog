<script context="module">
	import Hero from '$lib/components/Hero.svelte';
	import Socials from '$lib/components/Socials.svelte';

	// import { getAboutMe } from '$lib/queries/graphQLQueries';
	// import { client } from '$lib/utils/graphQLClient';

	// export const load = async () => {
	// 	const { author } = await client.request(getAboutMe);
	// 	return {
	// 		props: {
	// 			author
	// 		}
	// 	};
	// };
</script>

<script>
	export let data;
</script>

<svelte:head>
	<title>1dog - home</title>
</svelte:head>

<div>
	<Hero {data} />
</div>

<div class="grid justify-center">
	<Socials />
</div>
