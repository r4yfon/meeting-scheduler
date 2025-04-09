<script>
	import { onMount } from 'svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	// Close menu when clicking outside
	function handleClickOutside(event) {
		const menu = document.getElementById('mobile-menu');
		const button = document.getElementById('menu-button');

		if (isMenuOpen && menu && !menu.contains(event.target) && !button.contains(event.target)) {
			isMenuOpen = false;
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav class="w-full bg-white shadow-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-12 items-center justify-between md:h-16">
			<!-- Logo -->
			<div class="flex-shrink-0">
				<a href="/" class="flex items-center">
					<!-- Placeholder logo - replace with your actual logo -->
					<div
						class="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-bold text-white md:h-10 md:w-10"
					>
						MS
					</div>
					<span class="ml-2 text-lg font-semibold">Meeting Scheduler</span>
				</a>
			</div>

			<!-- Hamburger button -->
			<div class="md:hidden">
				<button
					id="menu-button"
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none"
					onclick={toggleMenu}
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						class:hidden={isMenuOpen}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<svg
						class="h-6 w-6"
						class:hidden={!isMenuOpen}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>

			<!-- Desktop menu - hidden on mobile -->
			<div class="hidden md:block">
				<div class="ml-4 flex items-center space-x-4">
					<a
						href="/schedules"
						class="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
					>
						View All Schedules
					</a>
					<a
						href="/create"
						class="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
					>
						Create New Schedule
					</a>
					<a
						href="/account"
						class="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
					>
						Account
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state -->
	<div
		id="mobile-menu"
		class="overflow-hidden transition-all duration-300 ease-in-out md:hidden"
		class:h-0={!isMenuOpen}
		class:h-auto={isMenuOpen}
	>
		<div class="space-y-1 bg-white px-2 pt-2 pb-3 shadow-lg sm:px-3">
			<a
				href="/schedules"
				class="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
			>
				View All Schedules
			</a>
			<a
				href="/create"
				class="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
			>
				Create New Schedule
			</a>
			<a
				href="/account"
				class="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
			>
				Account
			</a>
		</div>
	</div>
</nav>
