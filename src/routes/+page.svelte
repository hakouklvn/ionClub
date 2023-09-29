<script>
	import { Button } from 'flowbite-svelte';

	import Benefit from '$lib/benifit.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="bg-yellow-200 rounded-full py-2 px-4 mb-3 lg:mb-12 font-bold">
		<p class="text-sm">Over 3 million ready-to-work creatives in our community!</p>
	</div>
	<br />

	<h1 class="lg:w-2/3 text-center text-4xl lg:text-6xl font-mono font-bold">
		Hire the world’s top creative talent.
	</h1>
	<p class="font-sans mb-2 lg:mb-8 text-sm text-gray-400 text-center">
		Connect with a community of millions of top-rated designers & agencies around the world.
	</p>
	<br />
	<Button color="dark" pill size="xl">Start learning</Button>
</div>

<div class="images">
	<div class="image" />
	<div class="image" />
	<div class="image" />
	<div class="image" />
	<div class="image" />
</div>

<hr />

<div class="mt-12 lg:mt-32">
	<h1 class="text-center text-2xl lg:text-6xl font-mono font-bold">
		Why people choose EonClub to learn science more
	</h1>

	<div class="flex flex-col lg:flex-row m-120">
		<div class="w-full rounded">
			<img class="rounded-xl" src="school.jpg" alt="eon club logo" />
		</div>

		<div class="w-full">
			<Benefit />
			<Benefit />
			<Benefit />
		</div>
	</div>
</div>

<div class="flex flex-col bg-yellow-200 p-8 lg:p-32 items-center mt-16">
	<h1 class="text-center text-2xl lg:text-6xl font-mono font-bold">Start your learning now</h1>
	<p class="lg:w-2/3 text-sm lg:text-md text-center">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde ex ipsa distinctio aliquid
		dolor corporis magnam perferendis et error facere
	</p>
	<Button class="mt-8" color="dark" pill size="xl">Get Started now</Button>
</div>

<style>
	.images {
		margin: 10rem 5rem;
		display: flex;
		gap: 2rem;
	}

	.image {
		width: 360px;
		height: 350px;
		background-color: grey;
		border-radius: 3rem;
	}
</style>
