import { GraphQLClient } from 'graphql-request'
const GRAPHCMS_ENDPOINT = import.meta.env.VITE_GRAPHCMS_URL

export const client = new GraphQLClient(GRAPHCMS_ENDPOINT)