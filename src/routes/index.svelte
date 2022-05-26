<script context="module">
    import Hero from '$lib/components/Hero.svelte'
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

<Hero {author}/>