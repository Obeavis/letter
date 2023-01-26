import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const getUser = async (id: string) => {
		try {
			const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
			const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
			const user = await userResponse.json();
			const posts = await postResponse.json();

			const data = {...user[0], posts : posts}

			return data;
		} catch (error: any) {
			throw new Error(error);
		}
	};

	return {
		user: getUser(params.userId)
	};
};
