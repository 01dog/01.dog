<script context="module">
	import Project from '$lib/components/Project.svelte';

	import { getProjects } from '$lib/queries/graphQLQueries';
	import { client } from '$lib/utils/graphQLClient';

	export const load = async () => {
		const { projects } = await client.request(getProjects);
		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	export let projects;
</script>

<svelte:head>
	<title>1dog - projects</title>
</svelte:head>

<h1 class="text-5xl font-bold text-center mb-6">my projects</h1>
<div class="grid grid-flow-row-dense grid-cols-3 gap-y-6">
	{#each projects as project}
		<div><Project {project} /></div>
	{/each}
</div>
