import { gql } from 'graphql-request'

export const getPostsIndex = gql`
    query PostsIndex {
        posts {
            id
            title
            slug
            date
            excerpt
        }
    }    
`

export const getAboutMe = gql`
    query getAboutMe {
        author(where: {id:"cl3i4fpw6hr720bixcq90vzii"}) {
            name
            title
            picture {
                id
                url
            }
            biography
        }
    }
`