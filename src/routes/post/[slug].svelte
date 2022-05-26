<script context="module">
    import { gql, GraphQLClient } from 'graphql-request'

    export const load = async ({ params }) => {
        console.log(params)
        const client = new GraphQLClient(
            import.meta.env.VITE_GRAPHCMS_URL,
        )
        const query = gql`
        query PostPageQuery($slug: String!) {
            post(where: { slug: $slug }) {
                title
                date
                content {
                    html
                }
                tags
                author {
                    id
                    name
                }
            }
        }
    `
    const variables = {
        slug: params.slug,
    }

    const { post } = await client.request(query, variables)

    return {
        props: {
            post,
        },
    }
}
</script>

<script>
    export let post
</script>

<svelte:head>
    <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>{post.author.name}</p>
<p>{post.date}</p>
<p>{post.tags}</p>
<!--not safe!!-->
{@html post.content.html}