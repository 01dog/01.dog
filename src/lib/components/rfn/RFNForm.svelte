<script context="module">
	import RFNTextInput from './RFNTextInput.svelte';
	import { buildSurveyURL } from '$lib/rfn/rfn.js';
</script>

<script>
	function onSubmit(e) {
		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [k, v] = field;
			let isnum = /^\d*$/.test(v);
			if (!isnum) {
				alert('numbers only!');
				break;
			}
			data[k] = v;
		}

		if (Object.keys(data).length !== 0) {
			buildSurveyURL(data);
		}
	}
</script>

<h2 class="text-2xl font-bold mt-3">transaction info</h2>

<!-- on:submit|preventDefault={onSubmit} -->
<form class="form-control">
	<div class="grid grid-cols-3 p-4 gap-4">
		<div>
			<RFNTextInput placeholder="store number" id="storenum" name="storenum" />
		</div>
		<div>
			<RFNTextInput placeholder="terminal number" id="termnum" name="termnum" />
		</div>
		<div>
			<RFNTextInput placeholder="transaction ID" id="transid" name="transid" />
		</div>
		<div>
			<RFNTextInput placeholder="YY" id="year" name="year" />
		</div>
		<div>
			<RFNTextInput placeholder="MM" id="month" name="month" />
		</div>
		<div>
			<RFNTextInput placeholder="DD" id="day" name="day" />
		</div>
		<div class="col-start-2 col-end-3">
			<RFNTextInput placeholder="secret number" id="secret" name="secret" />
		</div>
	</div>
	<button type="submit" class="btn btn-primary mb-3">get RFN</button>
</form>
