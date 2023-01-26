<script lang="ts">
	function getRandom(items: string[]) {
		return items[Math.floor(Math.random() * items.length)];
	}
	export let data: any;
	const { user } = data;

	const colors = ['bg-emerald-200', 'bg-rose-300', 'bg-yellow-200', 'bg-sky-400'];
	const rotates = ['-5', '-10', '5', '10'];
</script>

<section
	class="flex flex-col justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-5 pt-20"
>
	<div class="flex bg-white justify-center rounded-lg shadow-lg w-full p-5">
		<div class="flex flex-col text-center px-2 mb-2">
			<span class="text-3xl font-semibold">{user.name}</span>
			<span>ID: <span class="font-semibold">{user.id}</span></span>

			<span>Username: <span class="font-semibold">{user.username}</span></span>
			<span>Email: <span class="font-semibold">{user.email}</span></span>
			<span
				>Address: <span class="font-semibold"
					>{user.address.suite}, {user.address.street}, {user.address.city}, {user.address
						.zipcode}</span
				></span
			>
			<span>Phone: <span class="font-semibold">{user.phone}</span></span>
			<span>Website: <span class="font-semibold">{user.website}</span></span>
			<span
				>Company: <span class="font-semibold">{user.company.name}, {user.company.catchPhrase}</span
				></span
			>
		</div>
	</div>
	<div class="grid md:grid-cols-2 xl:grid-cols-5 gap-5 w-full mt-10">
		{#each user.posts as post}
			<div
				class={`flex flex-col text-center shadow-2xl w-72 hover:z-50 hover:scale-[1.02] p-4 rotate-[${getRandom(
					rotates
				)}deg] ${getRandom(colors)}`}
			>
				<span class="font-semibold mb-5">{post.title}</span>
				<span>{post.body}</span>
			</div>
		{/each}
	</div>
</section>
