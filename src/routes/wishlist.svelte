<script>
	import Link from '$lib/components/Link.svelte';
</script>

<h1 class="text-5xl font-bold text-center mb-5">wishlist</h1>

<div class="overflow-x-auto">
	<table class="table table-zebra w-full text-center">
		<thead>
			<tr>
				<th />
				<th>what it is</th>
				<th>where to buy it</th>
				<th>how much</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>The Food Lab by J Kenji Lopez</td>
				<td
					><Link
						href="https://bookshop.org/books/the-food-lab-better-home-cooking-through-science-9781494539870/9780393081084"
						>Bookshop.org (or Amazon)</Link
					></td
				>
				<td class="text-accent">$45.95</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Omnivore apron</td>
				<td
					><Link
						href="https://www.omnivore.us/collections/pantry-box/products/omnivore-apron?variant=4876594708517"
						>Omnivore.com</Link
					></td
				>
			</tr>
		</tbody>
	</table>
</div>
