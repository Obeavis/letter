import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const getAllUsers = async () => {
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();

			return data;
		} catch (error: any) {
			throw new Error(error);
		}
	};

	return {
		users: getAllUsers()
	};
};
