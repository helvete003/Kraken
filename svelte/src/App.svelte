<script>
	import Config, {LIST_URL, REFRESH_URL} from './Config.svelte';
	import { onMount } from 'svelte';
	import List from './List.svelte';
	import Loading from './Loading.svelte';

	async function getList() {
		const response = await fetch(LIST_URL, {
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const json = await response.json();

		if(response.ok) {
			return json;
		} else {
			throw new Error(json);
		}
	}
	async function refreshList() {
		const response = await fetch(REFRESH_URL);

		if(response.ok) {
			location.reload(); 
		} else {
			throw new Error("Url nicht erreichbar?");
		}
	}
	let promise = null;
	onMount(() => {
		promise = getList();
	});
	function clickRefreshList() {
		promise = refreshList();
	}
</script>

<style>
	nav {
		padding:4rem 0 0 0;
	}
</style>


<nav>
	<button on:click={clickRefreshList}>Liste neu laden</button>
</nav>
<article>
	{#await promise}
		<Loading />
	{:then data}
		<List list_data={data} />
	{:catch error}
		<p style="color:red">{error.message}</p>
	{/await}
</article>