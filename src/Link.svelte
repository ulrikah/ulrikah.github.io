<script lang="ts">
    export let href: string;
    import { link } from "svelte-spa-router";
</script>

<style>
    a {
        text-decoration: none;
        margin: auto 0;
    }
</style>

{#if href.startsWith('http')}
    <a {href}><slot /></a>
{:else}
    <a {href} use:link><slot /></a>
{/if}
