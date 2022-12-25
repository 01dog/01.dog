import { getProjects } from '$lib/queries/graphQLQueries';
import { client } from '$lib/utils/graphQLClient';

export const load = async () => {
    const { projects } = await client.request(getProjects);
    return {projects};
};