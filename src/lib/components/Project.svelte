<script context="module">
	import { marked } from 'marked';
</script>

<script>
	export let project;
	let { title, about, image } = project;
</script>

<div class="card w-96 bg-base-100 shadow-xl hover:shadow-2xl">
	<figure><img src={image.url} alt="placeholder" /></figure>
	<div class="card-body">
		<h2 class="card-title">
			{title}
			<div class="badge badge-secondary">NEW</div>
		</h2>
		<p>{@html marked(about)}</p>
		<div class="card-actions justify-end">
			<div class="badge badge-outline">badge1</div>
			<div class="badge badge-outline">badge2</div>
		</div>
	</div>
</div>
