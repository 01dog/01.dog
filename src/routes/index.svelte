<script context="module">
    import Hero from '$lib/components/Hero.svelte'
    import Socials from '$lib/components/Socials.svelte'

    import { getAboutMe } from '$lib/queries/graphQLQueries'
    import { client } from '$lib/utils/graphQLClient'

    export const load = async () => {
        const { author } = await client.request(getAboutMe)
        return {
            props: {
                author,
            },
        }
    }
</script>

<!--this feels incorrect somehow-->
<script>
    export let author
</script>

<svelte:head>
    <title>01.dog</title>
</svelte:head>

<div>
    <Hero {author}/>
</div>
<h2 class="text-4xl font-bold text-center">test </h2>
<Socials />