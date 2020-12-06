<script lang="ts">
    import Router from "svelte-spa-router";
    import { wrap } from "svelte-spa-router/wrap";
    import Home from "./Home.svelte";
    import Design from "./Design.svelte";
    import NotFound from "./NotFound.svelte";

    const routes = {
        "/": Home,
        "/design": wrap({
            component: Design,
            props: {
                name: "Ulrik",
            },
        }),
        "*": NotFound,
    };
</script>

<body>
    <Router {routes} />
</body>
