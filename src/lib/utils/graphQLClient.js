import { GraphQLClient } from 'graphql-request'

const endpoint = "https://api-us-east-1.graphcms.com/v2/cl3hqqss0669z01xphutchbw8/master"

export const client = new GraphQLClient(endpoint, { headers: {} })