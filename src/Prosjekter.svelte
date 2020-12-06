<script lang="ts">
    import Row from "./Row.svelte";
    import Portal from "./Portal.svelte";
    import Peers from "./Peers.svelte";
    import Star from "./Star.svelte";
    import Blank from "./Blank.svelte";
    import Link from "./Link.svelte";
    import Beskrivelse from "./Beskrivelse.svelte";
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        border-top: 1px solid black;
        border-right: 1px solid black;
        width: 90%;
    }
</style>

<main>
    <Row>
        <Link href="https://github.com/ulrikah/peers">
            <Beskrivelse
                tittel={'Peers'}
                beskrivelse={'Peer-to-peer voice and video communication based on WebRTC'} />
        </Link>
        <Link href="https://github.com/ulrikah/peers">
            <Peers />
        </Link>
    </Row>
    <Row>
        <Link href="https://github.com/ulrikah/rave">
            <Star />
        </Link>
        <Link href="https://github.com/ulrikah/rave">
            <Beskrivelse
                tittel={'Rave'}
                beskrivelse={'Training musical agents with reinforcement learning'} />
        </Link>
    </Row>
    <Row>
        <Link href="https://github.com/ulrikah/morph">
            <Beskrivelse
                tittel={'Morphing'}
                beskrivelse={'Experiments with morphogenesis'} />
        </Link>
        <Link href="https://github.com/ulrikah/morph">
            <Portal />
        </Link>
    </Row>
    <Row>
        <Link href="https://github.com/ulrikah/blank">
            <Blank />
        </Link>
        <Link href="https://github.com/ulrikah/blank">
            <Beskrivelse
                tittel={'Blank'}
                beskrivelse={'Exploration of music in virtual reality'} />
        </Link>
    </Row>
</main>
