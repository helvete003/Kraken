<script>
    import Config, {LIST_URL} from './Config.svelte';
    import Loading from './Loading.svelte';
    import { slide } from 'svelte/transition';

    export let statuscode;
    export let customer;
    export let url;
    export let error;
    export let errorcode;
    export let body;
    export let lastupdate;
    let isPluginsOpen = false;
    const togglePlugins = () => isPluginsOpen = !isPluginsOpen;
    let isThemesOpen = false;
    const toggleThemes = () => isThemesOpen = !isThemesOpen;

    async function getElementData() {
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
    let promise;
    function clickGetList() {
		promise = getElementData();
	}
</script>
<style>
    .kraken-element {
        border:1px solid #aaa;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding:1em;
    }
    .flexing-box {
        width:100%;
        height:100%;
        display:flex;
        align-items: end;
        align-content: flex-end;
        justify-content: flex-end;
        flex-direction:column;
    }
    .small_text {
        font-size: 0.7em;
    }
    .status-green:before {
        content:'';
        width: 14px;
        height: 14px;
        border-radius: calc(14px/2);
        border:2px solid green;
        background-color:green;
        display:inline-block;
        margin:0 4px 0 0;
    }
    .status-red:before {
        content:'';
        width: 14px;
        height: 14px;
        border-radius: calc(18px/2);
        border:2px solid red;
        background-color:red;
        display:inline-block;
        margin:0 4px 0 0;
    }
    .customer {
        margin:0;
    }
</style>

<div class="kraken-element">
    {#await promise}
        <Loading />
    {:then data}
        <div class="row">
            <div class="column">
                <p class="customer {errorcode <= 2 ? 'status-green' : 'status-red'}">
                    <b>{customer}</b>
                </p>
                <p>
                    {url} [{statuscode}]
                </p>
            </div>
        </div>
        {#if error != ""}
            <div class="row">
                <div class="column">
                    <p style="color:red;">{error}</p>
                </div>
            </div>
        {/if}
        {#if errorcode <= 0}
            <div class="row">
                <div class="column">
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Platform</b> {body.platform.name} {body.platform.version}</td>
                            </tr>
                            <tr>
                                <td><b>Interpreter</b> {body.interpreter.name} {body.interpreter.version}</td>
                            </tr>
                            <tr>
                                <td><b>Webserver</b> {body.web_server.name} {body.web_server.server_signature}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="column">
                    <table>
                        <thead>
                            <tr>
                                <th>Datenbank</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#if body.database_server.client_info}
                            <tr>
                                <td>{body.database_server.client_info}</td>
                            </tr>
                            {/if}
                            {#if body.database_server.server_info}
                            <tr>
                                <td>{body.database_server.server_info}</td>
                            </tr>
                            {/if}
                            {#if body.database_server.host_info}
                            <tr>
                                <td>{body.database_server.host_info}</td>
                            </tr>
                            {/if}
                        </tbody>
                    </table>
                </div>
                <div class="column">
                    <table>
                        <thead>
                            <tr>
                                <th>Os</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#if body.os.name}
                            <tr>
                                <td>{body.os.name}</td>
                            </tr>
                            {/if}
                            {#if body.os.raw}
                            <tr>
                                <td>{body.os.raw}</td>
                            </tr>
                            {/if}
                        </tbody>
                    </table>
                </div>
            </div>
            {#if Object.entries(body.extra).length !== 0}
                <div class="row">
                    <div class="column column-50">
                        {#if body.extra.plugins !== undefined}
                            <button on:click={togglePlugins} aria-expanded={isPluginsOpen}> Plugins </button>
                            {#if isPluginsOpen}
                                <dl transition:slide={{ duration: 500 }}>
                                    {#each body.extra.plugins as elem}
                                        <dt class="{elem.active ? 'status-green' : 'status-red'}">{elem.name} ({elem.version})</dt>
                                        {#if elem.alerts != ""}
                                            <dd style="color:orange;">{elem.alerts}</dd>
                                        {/if}
                                    {/each}
                                </dl>
                            {/if}
                        {/if}
                    </div>
                    <div class="column column-50">
                        {#if body.extra.themes !== undefined}
                            <button on:click={toggleThemes} aria-expanded={isThemesOpen}> Themes </button>
                            {#if isThemesOpen}
                                <dl transition:slide={{ duration: 500 }}>
                                    {#each body.extra.themes as elem}
                                        <dt class="{elem.active ? 'status-green' : 'status-red'}">{elem.name} ({elem.version})</dt>
                                        {#if elem.alerts != ""}
                                            <dd style="color:orange;">{elem.alerts}</dd>
                                        {/if}
                                    {/each}
                                </dl>
                            {/if}
                        {/if}
                    </div>
                </div>
            {/if}
        {/if}
        <div class="row">
            <div class="column column-80">
                <!--<button on:click={clickGetList}>Element neu laden</button>-->
            </div>
            <div class="column column-20">
                <div class="flexing-box">
                    {#if body.kraken.version != ""}
                    <span class="small_text">Kraken: {body.kraken.version}</span>
                    {/if}
                    <span class="small_text">Update: {lastupdate}</span>
                </div>
            </div>
        </div>
    {:catch error}
        <p style="color:red">{error.message}</p>
    {/await}
</div>
