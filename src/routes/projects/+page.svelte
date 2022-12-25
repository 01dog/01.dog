<script>
	import Project from '$lib/components/Project.svelte';

	export let data;
</script>

<svelte:head>
	<title>1dog - projects</title>
</svelte:head>

<h1 class="text-5xl font-bold text-center mb-6">my projects</h1>
<div class="grid grid-flow-row-dense grid-cols-3 gap-y-6">
	{#each data.projects as projectsData}
		<div><Project {projectsData} /></div>
	{/each}
</div>
