<div class="flex flex-col w-full lg:flex-row">
	<div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
		<slot />
	</div>
	<div class="divider lg:divider-horizontal" />
	<div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
		<slot name="info" />
	</div>
</div>
