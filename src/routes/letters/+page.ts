import type { PageLoad } from './$types';
import type { Post } from '../../types/Post';
import type { User } from '../../types/User';

export const load: PageLoad = async ({ fetch }) => {
	const getAllLetters = async () => {
		try {
			const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
			const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
			const users = await usersResponse.json();
			const posts = await postResponse.json();

			const data = users.map((user: User) => ({
				...user,
				posts: posts.filter((post: Post) => post.userId === user.id)
			}));
			console.log('letters: ', data);
			return data;
		} catch (error: any) {
			throw new Error(error);
		}
	};

	return {
		users: getAllLetters()
	};
};
