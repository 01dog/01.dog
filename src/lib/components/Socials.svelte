<!--this can definitely all be done in a cleaner way, especially the buttons-->
<script>
	import LinkedButton from '$lib/components/LinkedButton.svelte';
	import Link from '$lib/components/Link.svelte';
	import CopyToClipboard from 'svelte-copy-to-clipboard';

	let discordTag = '1dog#0001';
	// is this correct? idk feels DRY
	let dataTip = {
		default: 'click to copy my username',
		copied: 'copied 1dog#0001 to clipboard!'
	};
	let tip = dataTip.default;

	const resetTooltip = () => {
		tip = dataTip.default;
	};

	const handleCopied = (e) => {
		console.log(`copied ${e}`);
		tip = dataTip.copied;
		setTimeout(() => {
			tip = dataTip.default;
		}, 5000);
	};

	const handleFailedCopy = (e) => {
		alert('failed to copy. try again. :-(');
	};
</script>

<grid class="grid grid-cols-4 gap-4 max-w-2xl place-items-center">
	<div class="col-span-4 text-4xl font-bold text-center mt-4 mb-2">find me here:</div>
	<div class="tooltip" data-tip={tip} value="1dog#0001">
		<CopyToClipboard text={discordTag} on:copy={handleCopied} on:fail={handleFailedCopy} let:copy>
			<button on:click={copy} class="btn gap-2">
				<svg role="img" class="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
					><title>Discord</title><path
						d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
					/></svg
				>
				Discord
			</button>
		</CopyToClipboard>
	</div>
	<div>
		<LinkedButton href="https://github.com/01dog">
			<svg role="img" class="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
				><title>GitHub</title><path
					d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
				/></svg
			>
			GitHub
		</LinkedButton>
	</div>
	<div>
		<LinkedButton href="https://steamcommunity.com/profiles/76561198035136145">
			<svg role="img" class="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
				><title>Steam</title><path
					d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
				/></svg
			>
			Steam
		</LinkedButton>
	</div>
	<div>
		<LinkedButton href="https://twitter.com/xchgraxrax">
			<svg role="img" class="h-6 w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
				><title>Twitter</title><path
					d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
				/></svg
			>
			Twitter
		</LinkedButton>
	</div>
	<div class="col-span-4 text-2xl font-bold text-center mt-4 mb-2">
		i can also be found a few other places:
	</div>
	<div class="col-span-2 text-center text-xl">
		<Link href="https://rateyourmusic.com/~1dog">rateyourmusic</Link>
	</div>
	<div class="col-span-2 text-center text-xl">
		<Link href="https://www.inaturalist.org/people/un_caine">inaturalist</Link>
	</div>
</grid>
