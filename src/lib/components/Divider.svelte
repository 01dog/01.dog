<div class="flex flex-col w-full lg:flex-row">
	<div class="grid basis-1/2 h-fit card bg-base-300 rounded-box place-items-center">
		<slot name="form">no form provided</slot>
	</div>
	<div class="divider lg:divider-horizontal" />
	<div class="grid basis-1/2 h-fit card bg-base-300 rounded-box place-items-center">
		<slot name="info">no info provided</slot>
	</div>
</div>
