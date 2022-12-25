import { getAboutMe } from '$lib/queries/graphQLQueries';
import { client } from '$lib/utils/graphQLClient';

export const load = async () => {
    const { author } = await client.request(getAboutMe);
    return author;
};