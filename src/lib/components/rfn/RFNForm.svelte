<script context="module">
	import RFNTextInput from './RFNTextInput.svelte';
	import buildSurveyURL from '$api/rfn.js';
</script>

<script>
	import RfnInfo from './RFNInfo.svelte';

	let disabled = false;
	let loading = false;
	let buttonText = 'get RFN';
	let RFN;

	// there is definitely a smarter way to do this using svelte's await blocks, but i just dont know how to yet
	function getRFN(e) {
		disabled = true;
		loading = true;
		buttonText = 'getting RFN...';

		const formData = new FormData(e.target);

		const data = {};
		for (let field of formData) {
			const [k, v] = field;
			// check if input is numerical only
			let isnum = /^\d*$/.test(v);
			if (!isnum) {
				alert('numbers only!');
				break;
			}
			data[k] = v;
		}
		console.log(data);

		// if we didnt break out of the loop, build the survey URL
		if (Object.keys(data).length !== 0) {
			RFN = buildSurveyURL(data)
				.then(function (data) {
					return data.replace(/(.{4})/g, '$&-').slice(0, -3);
				})
				.catch((error) => {
					return error.message;
				});
		}
	}
	console.log(RFN);
</script>

<h2 class="text-2xl font-bold mt-4">transaction info</h2>

<form class="form-control" on:submit|preventDefault={getRFN}>
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
	<button type="submit" class="btn btn-primary {loading} mb-4" {disabled}>{buttonText}</button>
</form>

{#if RFN.length !== 0}
	<p>we have a valid rfn! {RFN}</p>
{:else}
	<p>nothing yet</p>
{/if}
