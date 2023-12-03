<script>
	import { Avatar, Img } from 'flowbite-svelte';
	import { browser } from '$app/environment';

	if (browser) {
		window.location.href = '/contact';
		goto('/contact')
	}

</script>

<div class="flex flex-col lg:flex-row gap-3">
	<div class="w-full">
		<h1 class="w-2/3 font-bold text-2xl lg:text-6xl dark:text-white">
			We’re changing the way people connect.
		</h1>
		<br />
		<p class="lg:w-1/2 text-slate-500 dark:text-slate-400 font-light text-sm lg:text-md">
			Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit.
			Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim
			nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat
			veniam occaecat aliqua.
		</p>
	</div>

	<Img
		srcset="/trees.jpg 1x, /images/examples/image-1@2x.jpg 2x"
		alt="sample 1"
		size="w-full lg:w-96"
		class="rounded-2xl"
	/>
</div>
<br />
<br />
<br />
<hr />

<h1 class="w-1/2 font-bold text-xl lg:text-6xl mt-16 dark:text-white">Our Goal.</h1>
<br />
<p class="lg:w-1/2 text-slate-500 dark:text-slate-400 font-light text-sm lg:text-md">
	Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
	labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla
	sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam
	occaecat aliqua.
</p>
<br />
<p class="lg:w-1/2 text-slate-500 dark:text-slate-400 font-light text-sm lg:text-md">
	Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
	labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla
	sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam
	occaecat aliqua.
</p>
<br />
<Img
	srcset="/trees.jpg 1x, /images/examples/image-1@2x.jpg 2x"
	alt="sample 1"
	size="w-full"
	class="rounded-2xl"
/>

<h1 class="w-1/2 font-bold text-xl lg:text-6xl mt-16 dark:text-white">Our Team.</h1>
<br />
<p class="lg:w-1/2 text-slate-500 dark:text-slate-400 font-light text-sm lg:text-md">
	Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
	labore commodo nulla aliqua proident mollit ullamco exercitation tempor.
</p>

<br />

<div class="grid grid-cols-2 lg:grid-cols-6 md:grid-col-3 gap-2 lg:gap-6">
	{#each [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] as _}
		<div>
			<Avatar size="xl">JL</Avatar>
			<p class="font-bold lg:text-lg text-sm dark:text-white">FullName name</p>
			<p class="text-sm text-slate-500 dark:text-slate-400 font-light">Member/CEO</p>
		</div>
	{/each}
</div>
