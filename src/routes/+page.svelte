<script>
	import { Button } from 'flowbite-svelte';

	import Benefit from '$lib/benifit.svelte';
</script>

<div class="flex flex-col items-center">
	<div class="bg-yellow-200 rounded-full py-2 px-4 mb-12 font-bold">
		<p>Over 3 million ready-to-work creatives in our community!</p>
	</div>
	<br />

	<h1 class="w-2/3 text-center text-6xl font-mono font-bold">
		Hire the world’s top creative talent.
	</h1>
	<p class="font-sans mb-8">
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

<div class="mt-32">
	<h1 class="text-center text-6xl font-mono font-bold">
		Why people choose EonClub to learn science more
	</h1>

	<div class="infos">
		<div class="benefits">
			<Benefit />
			<Benefit />
			<Benefit />
		</div>

		<div class="image">
			<img src="school.jpg" alt="eon club logo" />
		</div>
	</div>
</div>

<div class="flex flex-col bg-yellow-200 p-32 items-center">
	<h1 class="text-center text-6xl font-mono font-bold">Start your learning now</h1>
	<p class="w-2/3 text-center">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. In unde ex ipsa distinctio aliquid
		dolor corporis magnam perferendis et error facere
	</p>
	<Button class="mt-8" color="dark" pill size="xl">Get Started now</Button>
</div>

<style>
	/* team */
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

	/* why choose */

	.infos {
		display: flex;
		gap: 2rem;
		margin: 5rem 7rem;
	}
	.benefits {
		width: 50%;
	}
	.image {
		width: 50%;
		border-radius: 3rem;
	}
	.img {
		height: 100px;
	}
</style>
