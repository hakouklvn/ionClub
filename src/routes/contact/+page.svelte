<script>
	import { Button, Dropzone, Helper, Input, Label, Textarea } from 'flowbite-svelte';
	import { onDestroy, onMount } from 'svelte';

	let textareaprops = {
		id: 'message',
		name: 'message',
		label: 'Your message',
		rows: 6,
		placeholder: 'Why do you want to join us'
	};

	let windowWidth = window.innerWidth;
	const handleResize = () => (windowWidth = window.innerWidth);
	onMount(() => window.addEventListener('resize', handleResize));
	onDestroy(() => window.addEventListener('resize', handleResize));

	let value = [];
	const dropHandle = (event) => {
		value = [];
		event.preventDefault();
		if (event.dataTransfer.items) {
			[...event.dataTransfer.items].forEach((item, i) => {
				if (item.kind === 'file') {
					const file = item.getAsFile();
					value.push(file.name);
					value = value;
				}
			});
		} else {
			[...event.dataTransfer.files].forEach((file, i) => {
				value = file.name;
			});
		}
	};

	const handleChange = (event) => {
		const files = event.target.files;
		if (files.length > 0) {
			value.push(files[0].name);
			value = value;
		}
	};

	const showFiles = (files) => {
		if (files.length === 1) return files[0];
		let concat = '';
		files.map((file) => {
			concat += file;
			concat += ',';
			concat += ' ';
		});

		if (concat.length > 40) concat = concat.slice(0, 40);
		concat += '...';
		return concat;
	};
</script>

<div class="lg:flex gap-3 lg:border lg:rounded-lg lg:border-grey-300">
	<form class="w-full flex flex-col lg:mt-8 lg:p-16 mt-2 p-4 space-y-6" action="#">
		<h3 class="text-3xl font-bold text-gray-900 dark:text-white">Lets work togother</h3>
		<p class="text-slate-500 dark:text-slate-400 font-light text-md">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis cum accusantium
			quisquam enim unde accusamus ducimus dolore dignissimos iure, id, est iste alias temporibus
			distinctio quibusdam quae culpa mollitia!
		</p>
		<br />

		<Dropzone
			id="dropzone"
			on:drop={dropHandle}
			on:dragover={(event) => {
				event.preventDefault();
			}}
			on:change={handleChange}
		>
			<svg
				aria-hidden="true"
				class="mb-3 w-10 h-10 text-gray-400"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
				/></svg
			>
			{#if value.length === 0}
				<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
					<span class="font-semibold">Click to upload</span> or drag and drop
				</p>
				<p class="text-xs text-gray-500 dark:text-gray-400">
					SVG, PNG, JPG or GIF (MAX. 800x400px)
				</p>
			{:else}
				<p>{showFiles(value)}</p>
			{/if}
		</Dropzone>
		<Helper class="mt-2 text-right" color="red">
			<span class="font-bold">Upload your photo</span>
		</Helper>
		<br />

		<div class="flex gap-3">
			<Label class="space-y-2 w-full font-bold">
				<span>First name</span>
				<Input type="text" name="firstName" required />
			</Label>
			<Label class="space-y-2 w-full font-bold">
				<span>Last name</span>
				<Input type="text" name="lastName" required />
			</Label>
		</div>
		<br />

		<Label class="space-y-2 font-bold">
			<span>Email</span>
			<Input type="email" name="email" placeholder="name@univ.dz" required />
		</Label>
		<br />

		<Label class="space-y-2 font-bold">
			<span>Phone</span>
			<Input type="tel" name="phone" placeholder="0xxxxxxx" required />
		</Label>
		<br />

		<Label class="space-y-2 font-bold">
			<span>Tell us about yourself</span>
			<Textarea {...textareaprops} />
		</Label>
		<br />

		<Button type="submit" class="w-full">Send your message</Button>
	</form>
	{#if windowWidth > 768}
		<div class="w-full lg:visible sm:invisible">
			<img class="rounded-lg object-contain" src="departement.jpg" alt="school" />
		</div>
	{/if}
</div>
