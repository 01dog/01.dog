<script>
	import Project from '$lib/components/Project.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>1dog - stuff</title>
</svelte:head>

<h1 class="text-3xl font-bold text-center mb-6">some stuff im doing</h1>
<div class="grid grid-flow-row-dense grid-cols-3 gap-y-6">
	{#each data.projects as projectsData}
		<div><Project {projectsData} /></div>
	{/each}
</div>
