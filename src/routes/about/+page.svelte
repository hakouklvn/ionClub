<script>
	import { Avatar, Img } from 'flowbite-svelte';
</script>

<div class="flex gap-3">
	<div class="w-full">
		<h1 class="w-2/3 font-bold text-6xl">We’re changing the way people connect.</h1>
		<br />
		<p class="w-1/2 text-grey-400 font-light text-md">
			Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit.
			Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim
			nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat
			veniam occaecat aliqua.
		</p>
	</div>

	<Img
		srcset="/trees.jpg 1x, /images/examples/image-1@2x.jpg 2x"
		alt="sample 1"
		size="w-96"
		class="rounded-2xl"
	/>
</div>
<br />
<br />
<br />
<hr />

<h1 class="w-1/2 font-bold text-6xl mt-16">Our Goal.</h1>
<br />
<p class="w-1/2 text-grey-400 font-light text-md">
	Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
	labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla
	sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam
	occaecat aliqua.
</p>
<br />
<p class="w-1/2 text-grey-400 font-light text-md">
	Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
	labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla
	sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam
	occaecat aliqua.
</p>
<br />
<p class="w-1/2 text-grey-400 font-light text-md">
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

<h1 class="w-1/2 font-bold text-6xl mt-16">Our Team.</h1>
<br />
<p class="w-1/2 text-grey-400 font-light text-md">
	Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et
	labore commodo nulla aliqua proident mollit ullamco exercitation tempor.
</p>

<br />

<div class="grid grid-cols-6 gap-6">
	{#each [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] as _}
		<div>
			<Avatar size="xl">JL</Avatar>
			<p class="font-bold">FullName name</p>
			<p class="text-sm text-grey-300 font-light">Member/CEO</p>
		</div>
	{/each}
</div>
