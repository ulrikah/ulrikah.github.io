<script lang="ts">
    import Router, { push } from "svelte-spa-router";
    import Peers from "./Posts/Peers.svelte";

    const prefix = "/posts";
    const postsRoutes = {
        "/peers": Peers,
    };
</script>

<main>
    <div>
        <a href="/">../</a>
    </div>
    <Router routes={postsRoutes} {prefix} />
</main>

<style>
    div {
        width: 70%;
        margin: 5% auto 10% auto;
        text-align: right;
    }
    div > a {
        font-size: 1.5rem;
        font-family: monospace;
    }
</style>
