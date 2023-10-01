<script lang="ts">
	import { Button, Card } from 'flowbite-svelte';
	import type { PageData } from './$types';
	import { ArrowUpRightFromSquareOutline, GiftBoxSolid } from 'flowbite-svelte-icons';
	import { moduleName } from '$lib/store/module';

	export let data: PageData;
	let semesterSelected = 0;

	async function loadModules(semester: number) {
		semesterSelected = semester;

		const response = await fetch(
			'api/module?' + new URLSearchParams({ semester: semester.toString() })
		);
		data = { modules: await response.json() };
	}
</script>

<div class="flex justify-between mb-8">
	<div class="title">
		<h1 class="text-xl lg:text-4xl font-bold dark:text-white">Learning paths</h1>
		<p class="text-sm font-light text-slate-500 dark:text-slate-400">
			Choose the course you're interested in
		</p>
	</div>
	<div class="">
		<Button size="xs" on:click={() => loadModules(1)} outline={semesterSelected != 1}>
			semester 1
		</Button>
		<Button size="xs" on:click={() => loadModules(2)} outline={semesterSelected != 2}>
			semester 2
		</Button>
	</div>
</div>

<div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
	{#each data.modules as module}
		<Card>
			<GiftBoxSolid class="w-7 h-7 mb-3 text-gray-500 dark:text-gray-400" />
			<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
				{module.name}
			</h5>
			<p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
				{module.description}
			</p>
			<a
				href="/courses/{module.id}"
				class="inline-flex items-center text-primary-600 hover:underline"
				on:click={() => moduleName.set(module.name)}
			>
				See our guideline
				<ArrowUpRightFromSquareOutline class="w-3 h-3 ml-2.5" />
			</a>
		</Card>
	{/each}
</div>
