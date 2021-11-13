<script lang="ts">
    import Link from "../Link.svelte";
</script>

<main>
    <h1>Peers</h1>

    <code> peers </code> is an application for peer-to-peer multi-user video and
    audio streaming over WebRTC. It was developed fall 2020 to learn about
    WebRTC and to investigate the latency limitations of "naïve" multi-user P2P
    communication when scaling up the number of participants.

    <p>
        The platform is <a href="https://handshakers.herokuapp.com/"
            >running on Heroku</a
        >. Currently, there is only one room to join. If you want to test it you
        can do so by opening a connection to yourself on two different devices,
        or invite a friend to join. The platform doesn't require any
        authentication, so the link above is, in theory, the only thing you need
        to connect.
    </p>

    <p>
        The source code is available at <a
            href="https://github.com/ulrikah/peers">Github</a
        >
    </p>
    <br />

    <figure>
        <img src="/peers.png" alt="Demonstration of four connected peers" />
        <figcaption>User testing of the application</figcaption>
    </figure>

    <br />
    <br />
</main>

<style>
    main {
        width: 70%;
        margin: auto;
        line-height: 1.3;
    }

    code {
        font-weight: bold;
    }

    img {
        margin: 0;
        width: 100%;
        border: 2px solid black;
    }

    figcaption {
        font-size: 0.8rem;
    }
</style>
