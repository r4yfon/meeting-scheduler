<script>
	// Placeholder for authentication state
	let isLoggedIn = false;
</script>

<div class="container mx-auto max-w-4xl px-4 py-12">
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold text-blue-600">Meeting Scheduler</h1>
		<p class="mb-6 text-xl text-balance text-gray-700">
			Find the perfect time for your next meeting without the back-and-forth.
		</p>
		<p class="text-lg text-balance text-gray-600">
			Create a meeting schedule, share it with your team, and quickly find a time that works for
			everyone.
		</p>
	</div>
	<div class="grid gap-6 md:grid-cols-2">
		<!-- Create without login option -->
		<div class="rounded-lg bg-white p-8 shadow-lg">
			<h3 class="mb-3 text-xl font-semibold text-gray-800">Quick Schedule</h3>
			<p class="mb-6 text-gray-600">
				Need to schedule a meeting right away? No account needed. Your meeting link will be saved to
				your browser.
			</p>
			<a
				href="/create-anonymous"
				class="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
			>
				Create Meeting Without Login
			</a>
		</div>

		<!-- Login/Register option -->
		<div class="rounded-lg bg-white p-8 shadow-lg">
			<h3 class="mb-3 text-xl font-semibold text-gray-800">Sign In / Register</h3>
			<p class="mb-6 text-gray-600">
				Create an account to manage all your meetings in one place, access history, and more
				features.
			</p>
			<div class="space-y-3">
				<a
					href="/login"
					class="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
				>
					Sign In
				</a>
				<a
					href="/register"
					class="block w-full rounded-lg bg-gray-100 px-4 py-3 text-center font-medium text-gray-800 transition-colors hover:bg-gray-200"
				>
					Create Account
				</a>
			</div>
		</div>
	</div>
</div>
