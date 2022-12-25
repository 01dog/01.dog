<script>
	import { marked } from 'marked';
	import Link from '$lib/components/Link.svelte';

	export let projectsData;
	console.log('IN PROJECTS COMP: ', projectsData);
	let badgeArr;
	let { title, about, image, url, badges } = projectsData;

	if (badges !== null) {
		badgeArr = badges.split(',');
	}
</script>

<div class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
	<figure><img src={image.url} alt="placeholder" /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{title}
		</h2>
		<p>{@html marked(about)}</p>
		{#if url}
			<Link href={url}>{url}</Link>
		{/if}

		{#if badges}
			<div class="mt-2 card-actions justify-end">
				{#each badgeArr as badge}
					<div class="badge badge-outline">{badge}</div>
				{/each}
			</div>
		{/if}
	</div>
</div>
