<script lang="ts">
    import Router from "svelte-spa-router";
    import Home from "./Home.svelte";
    import Posts from "./Posts.svelte";
    import NotFound from "./NotFound.svelte";

    const routes = {
        "/": Home,
        "/posts": Posts,
        "/posts/*": Posts,
        "*": NotFound,
    };
</script>

<body>
    <Router {routes} />
</body>
