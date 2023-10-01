<script lang="ts">
	import type { PageData } from './$types';
	import { moduleName } from '$lib/store/module';

	import { FileLinesSolid, SearchOutline } from 'flowbite-svelte-icons';
	import {
		Breadcrumb,
		BreadcrumbItem,
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';

	export let data: PageData;
</script>

<div class="w-full">
	<Breadcrumb aria-label="Solid background breadcrumb example" solid>
		<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
		<BreadcrumbItem>{$moduleName}</BreadcrumbItem>
	</Breadcrumb>

	<br />
	<Table hoverable={true} class="w-full">
		<TableHead>
			<TableHeadCell />
			<TableHeadCell>File name</TableHeadCell>
			<TableHeadCell>File Resume</TableHeadCell>
			<TableHeadCell>
				<span class="sr-only">View</span>
			</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#each data.documents as document}
				<TableBodyRow>
					<TableBodyCell>
						<FileLinesSolid class="w-5 h-5  text-red-500 " />
					</TableBodyCell>

					<TableBodyCell>{document.name}</TableBodyCell>
					<TableBodyCell>{document.resume}</TableBodyCell>
					<TableBodyCell>
						<Button
							href={document.fileUrl}
							target="_blank"
							class="
								 hover:bg-green-200 bg-green-100 text-green-700 dark:text-slate-800 dark:bg-green-300 hover:dark:bg-green-200"
						>
							View
							<SearchOutline class="w-3 h-3 ml-3 text-green-500 dark:text-slate-800" />
						</Button>
					</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
</div>
