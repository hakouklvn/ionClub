<script>
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		Footer,
		FooterBrand,
		FooterLinkGroup,
		FooterLink,
		FooterCopyright,
		NavHamburger,
		FooterIcon
	} from 'flowbite-svelte';
	import { FacebookSolid, DiscordSolid, ImageSolid } from 'flowbite-svelte-icons';

	import '../app.postcss';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/logo.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
	</NavBrand>
	<div class="flex items-center md:order-2">
		<img src="/logo2.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
	</div>
	<NavHamburger on:click={toggle} />

	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/courses">Courses</NavLi>
		<!-- <NavLi href="/events">Events</NavLi> -->
		<NavLi href="/about">About</NavLi>
		<NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>

<div class="lg:p-16 p-4">
	<slot />
</div>

<Footer footerType="logo" class="bottom-0 w-full">
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterBrand href="https://flowbite.com" src="/logo.png" alt="Flowbite Logo" name="" />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
		>
			<FooterLink href="/about">About</FooterLink>
			<FooterLink href="/contact">Contact</FooterLink>
		</FooterLinkGroup>
	</div>
	<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
	<div class="sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href="/" by="IoN™" />
		<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
			<FooterIcon href="https://www.facebook.com/groups/1321445388577259/?ref=share">
				<FacebookSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="https://discord.com/invite/5GzbCydA">
				<DiscordSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
			<FooterIcon href="https://www.instagram.com/inside.of.nano/">
				<ImageSolid
					class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"
				/>
			</FooterIcon>
		</div>
	</div>
</Footer>
