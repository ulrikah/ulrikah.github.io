<script lang="ts">
    export let tittel: string;
    export let beskrivelse: string | undefined;
</script>

<style>
    h2,
    p {
        max-width: 30ch;
        padding: 0 1rem;
    }
    div {
        margin: auto 0;
    }
</style>

<div>
    <h2>{tittel}</h2>

    {#if beskrivelse}
        <p>{beskrivelse}</p>
    {/if}
</div>
