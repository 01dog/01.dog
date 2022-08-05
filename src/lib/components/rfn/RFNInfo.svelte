<h2 class="text-2xl font-bold mt-3">about RFNs</h2>
<p class="p-4">
	RFNs are comprised of 8 sets of 4 numbers on the bottom of a receipt and are used for returns.
	RFNs follow a standard format made up of info about the transaciton and are formatted as follows:
	<br />
	<span class="text-primary">store number (with leading 0s)</span> +
	<span class="text-accent">terminal number (no leading 0s)</span> +
	<span class="text-secondary">transaction ID (with leading 0s)</span> +
	<span class="text-error">random number</span> +
	<span class="text-info">date (in YY/MM/DD format, with leading 0s)</span> +
	<span class="text-warning">secret number (can have a leading 0, constant, store specific?)</span>
	<br />
	<span class="text-primary">0920-4</span><span class="text-accent">71</span><span
		class="text-secondary">0-212</span
	><span class="text-error">4</span>-<span class="text-info">2208-03</span><span
		class="text-warning">03</span
	>
	<br />
	im not 100% sure how this will handle transaction IDs >9999. if they just roll over, nothing changes.
	otherwise /shrug
	<br />
	<br />
	for this tool to work, however, we need 2 more digits after the secret number. on the bottom of a receipt,
	the survey number and password is just the RFN split into 2 sections: survey number and password. the
	survey number ends at the transaction ID. the last <b>4 digits of the password</b> section contain
	the entire secret number needed. this appears to be static and never change, but could be store specific.
</p>
