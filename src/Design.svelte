<script lang="ts">
    import Link from "./Link.svelte";
    export let name: string;
</script>

<style>
    main {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .column {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;
        padding-left: 2rem;
    }
    footer {
        margin-top: auto;
        font-size: 0.8rem;
    }
    .left {
        border-right: 1px solid black;
        flex-grow: 1;
    }
    .right {
        flex-grow: 5;
    }
    .header {
        padding: 2rem 0;
    }
    .left .header img {
        position: absolute;
        top: 60px;
    }
    .header p {
        font-weight: bold;
        margin-block-start: 0;
        margin-block-end: 0;
    }
</style>

<main>
    <div class="column left">
        <div class="header">
            <img src="/globe.png" alt="Globe" width="30" />
        </div>
        <footer>
            <Link href={'https://github.com/ulrikah'}>
                <span>{'github/ulrikah'}</span>
            </Link>
            <p>ulrikhalmoy (at) gmail.com</p>
        </footer>
    </div>
    <div class="column right">
        <div class="header">
            <p>welcome to {name}'s club</p>
        </div>
    </div>
</main>
