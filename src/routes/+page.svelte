<script>
	import { Button, Carousel } from 'flowbite-svelte';
	import { browser } from '$app/environment';

	import Benefit from '$lib/benifit.svelte';
	import { goto } from '$app/navigation';
	export const images = [
		{
			alt: 'Cosmic timetraveler',
			src: '/trees.jpg',
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			alt: 'Cosmic timetraveler',
			src: '/school.jpg',
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		},
		{
			alt: 'Cosmic timetraveler',
			src: '/departement.jpg',
			title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
		}
	];

	if (browser) {
		window.location.href = '/contact';
		goto('/contact')
	}
</script>

<div class="flex flex-col items-center mt-12 lg:mt-0">
	<div class="bg-yellow-200 text-center rounded-full py-2 px-4 mb-3 lg:mb-12 font-bold">
		<p class="text-sm">Over 3 million ready-to-work creatives in our community!</p>
	</div>
	<br />

	<h1 class="lg:w-2/3 text-center text-4xl lg:text-6xl font-mono font-bold dark:text-white">
		Hire the world’s top creative talent.
	</h1>
	<p class="font-sans mb-2 lg:mb-8 text-sm text-slate-500 dark:text-slate-400 text-center">
		Connect with a community of millions of top-rated designers & agencies around the world.
	</p>
	<br />
	<Button color="yellow" pill size="xl">Start learning</Button>
</div>

<div class="w-full my-32 h-4xl">
	<Carousel
		imgClass="object-contain h-full w-fit rounded-sm"
		class="h-full"
		{images}
		duration="3000"
	/>
</div>

<hr />

<div class="mt-12 lg:mt-32">
	<h1 class="text-4xl lg:text-6xl font-sans font-bold dark:text-white">
		Why people choose EonClub
	</h1>
	<p
		class="text-slate-500 dark:text-slate-400 font-normal lg:font-bold text-md lg:text-lg md:w-2/3 lg:w-1/2 mt-6 mb-16"
	>
		Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
		long-term value and drive economic growth.
	</p>

	<div class="grid grid-cols-auto md:grid-cols-2 lg:grid-cols-3 gap-12">
		<Benefit />
		<Benefit />
		<Benefit />
		<Benefit />
		<Benefit />
		<Benefit />
	</div>
</div>

<div class="flex flex-col bg-yellow-200 p-8 lg:p-32 items-center mt-16 lg:mt-48">
	<h1 class="text-center text-2xl lg:text-6xl font-mono font-bold">Start your learning now</h1>
	<p class="lg:w-2/3 text-sm lg:text-md text-center">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde ex ipsa distinctio aliquid
		dolor corporis magnam perferendis et error facere
	</p>
	<Button class="mt-8" color="dark" pill size="xl">Get Started now</Button>
</div>
