<script lang="ts">
    export let tittel: string;
    export let beskrivelse: string | undefined;
</script>

<style>
    h3,
    p {
        max-width: 30ch;
        padding: 0 1rem;
    }
    div {
        margin: auto 0;
    }
</style>

<div>
    <h3>{tittel}</h3>

    {#if beskrivelse}
        <p>{beskrivelse}</p>
    {/if}
</div>
