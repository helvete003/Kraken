<script>
    import App from './App.svelte';
    import { slide } from 'svelte/transition';
    import ListElement from './List-Element.svelte';
    export let list_data;

    console.log(list_data);
</script>

{#if list_data != undefined}
    <ul>
        {#each list_data as elem (elem.id)}
            <li transition:slide|local>
                <ListElement {...elem} />
            </li>
        {/each}
    </ul>
{/if}