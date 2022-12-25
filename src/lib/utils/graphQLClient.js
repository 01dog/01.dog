import { GraphQLClient } from 'graphql-request'

const endpoint = "https://us-east-1.cdn.hygraph.com/content/cl3hqqss0669z01xphutchbw8/master"

export const client = new GraphQLClient(endpoint, { headers: {} })