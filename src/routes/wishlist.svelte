<script>
	import Link from '$lib/components/Link.svelte';
</script>

<h1 class="text-5xl font-bold text-center text-primary mb-5">wishlist</h1>

<h2 class="text-2xl font-bold text-center mb-2">kitchen stuff</h2>
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
				<td><mark>1</mark></td>
				<td>The Food Lab by J Kenji Lopez</td>
				<td
					><Link
						href="https://bookshop.org/books/the-food-lab-better-home-cooking-through-science-9781494539870/9780393081084"
						>bookshop.org (or Amazon)</Link
					></td
				>
				<td class="text-accent">$45.95</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Omnivore apron; Large in either Natural or Navy</td>
				<td
					><Link
						href="https://www.omnivore.us/collections/pantry-box/products/omnivore-apron?variant=4876594708517"
						>omnivore.com</Link
					></td
				>
				<td class="text-accent">$80</td>
			</tr>
			<tr>
				<td><mark>3</mark></td>
				<td>Made In 10" frying pan</td>
				<td
					><Link href="https://madeincookware.com/products/stainless-steel-frying-pan/10-inch"
						>madeincookware.com</Link
					></td
				>
				<td class="text-accent">$85</td>
			</tr>
			<tr>
				<td><mark>4</mark></td>
				<td>Made In 2QT sauce pot</td>
				<td
					><Link href="https://madeincookware.com/products/stainless-steel-sauce-pan/2-quart"
						>madeincookware.com</Link
					></td
				>
				<td class="text-accent">$99</td>
			</tr>
			<tr>
				<td>5</td>
				<td>Smithey kitchen tool kit</td>
				<td
					><Link href="https://smithey.com/collections/accessories/products/tool_bundle"
						>smithey.com</Link
					></td
				>
				<td class="text-accent">$80</td>
			</tr>
			<tr>
				<td><mark>6</mark></td>
				<td>silicone utensils. basically any of them to replace my burn plastic ones</td>
				<td
					><Link
						href="https://www.amazon.com/stores/DIORO/page/C8464684-8784-4B9A-8BC8-60EF90B59B71?ref_=ast_bln"
					/></td
				>
				<td class="text-accent">~$20-$60</td>
			</tr>
			<tr>
				<td>7</td>
				<td>1 or 2 8oz or 13oz chef's press</td>
				<td
					><Link
						href="https://bernalcutlery.com/products/chefs-press-chefs-press-13-oz-stainless-made-in-oa?variant=36628822229144"
						>bernalcutlery.com</Link
					></td
				>
				<td class="text-accent">$16-21.50 ea.</td>
			</tr>
			<tr>
				<td><mark>8</mark></td>
				<td>bench scraper (doesn't have to be this one but metal would be nice)</td>
				<td
					><Link
						href="https://www.williams-sonoma.com/products/williams-sonoma-olivewood-bench-scraper/?isx=0.0.612"
						>williams-sonoma.com</Link
					></td
				>
				<td class="text-accent">$20</td>
			</tr>
			<tr>
				<td><mark>9</mark></td>
				<td>oxo can opener</td>
				<td><Link href="https://www.oxo.com/soft-handled-can-opener-433.html">oxo.com</Link></td>
				<td class="text-accent">$16.99</td>
			</tr>
			<tr>
				<td><mark>10</mark></td>
				<td>oxo food scale</td>
				<td
					><Link
						href="https://www.oxo.com/categories/cooking-and-baking/mix-measure/5-lb-food-scale-with-pull-out-display.html"
						>oxo.com</Link
					></td
				>
				<td class="text-accent">$32.99</td>
			</tr>
			<tr>
				<td>11</td>
				<td>fat gold standard olive oil </td>
				<td><Link href="https://fat.gold/shop/">fat.gold</Link></td>
				<td class="text-accent">$32</td>
			</tr>
		</tbody>
	</table>

	<!--this wont line up with the kitchen table but w/e, i dont care-->
	<h2 class="text-2xl font-bold text-center mb-2">clothes</h2>
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
				<td>12</td>
				<td>darn tough crew socks (basically any color)</td>
				<td>
					<Link
						href="https://darntough.com/collections/men?narrow=[[%22Height%22%2C%22height-code%20Crew%22]]&disable_semantics=1"
						>darntough.com</Link
					>
				</td>
				<td class="text-accent">$22-24</td>
			</tr>
		</tbody>
	</table>
</div>
