<script context="module">
	import Hero from '$lib/components/Hero.svelte';
	import Socials from '$lib/components/Socials.svelte';

	import { getAboutMe } from '$lib/queries/graphQLQueries';
	import { client } from '$lib/utils/graphQLClient';

	export const load = async () => {
		console.log('-----------getAboutMe-----------');
		console.log(getAboutMe);
		console.log('--------------------------------');
		const { author } = await client.request(getAboutMe);
		return {
			props: {
				author
			}
		};
	};
</script>

<!--this feels incorrect somehow-->
<script>
	export let author;
	console.log('-----------author-----------');
	console.log(author);
	console.log('----------------------------');
</script>

<svelte:head>
	<title>1dog</title>
</svelte:head>

<div>
	<Hero {author} />
</div>

<div class="grid justify-center">
	<Socials />
</div>
