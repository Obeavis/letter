<script lang="ts">
	export let data: any;
	const { users } = data;
</script>

<section
	class="flex justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-5 pt-20"
	data-sveltekit-preload-data="off"
>
	<div class="grid md:grid-cols-2 xl:grid-cols-5 gap-4 w-full">
		{#each users as user}
			<a
				class="flex bg-white rounded-lg shadow-lg hover:scale-[1.02] active:scale-[.98] cursor-pointer p-5"
				href={`user/${user.id}`}
			>
				<div class="flex flex-col gap-1">
					<span class="font-semibold text-lg">User:</span>
					<div class="flex flex-col px-2 mb-2">
						<span>ID: <span class="font-semibold">{user.id}</span></span>
						<span>Name: <span class="font-semibold">{user.name}</span></span>
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
							>Company: <span class="font-semibold"
								>{user.company.name}, {user.company.catchPhrase}</span
							></span
						>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
