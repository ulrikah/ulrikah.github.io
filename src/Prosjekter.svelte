<script lang="ts">
    import Row from "./Row.svelte";
    import Portal from "./Portal.svelte";
    import Peers from "./Peers.svelte";
    import Star from "./Star.svelte";
    import Blank from "./Blank.svelte";
    import Link from "./Link.svelte";
    import Beskrivelse from "./Beskrivelse.svelte";
    import Wave from "./Wave.svelte";
</script>

<main>
    <Row>
        <p>
            Below are some of the projects that I've worked on the last couple
            of years
        </p>
    </Row>
    <Row>
        <Link href="https://github.com/ulrikah/peers">
            <Beskrivelse
                tittel={"Peers"}
                beskrivelse={"Platform for peer-to-peer voice and video communication"}
            />
        </Link>
        <Link href="https://github.com/ulrikah/peers">
            <Peers />
        </Link>
    </Row>
    <Row>
        <Link href="https://github.com/ulrikah/blank">
            <Blank />
        </Link>
        <Link href="https://github.com/ulrikah/blank">
            <Beskrivelse
                tittel={"Blank"}
                beskrivelse={"Exploration of musical interactions in virtual reality. This project was developed as part of a scholarship that I received from Blank"}
            />
        </Link>
    </Row>
    <Row>
        <Link href="https://github.com/ulrikah/morph">
            <Beskrivelse
                tittel={"Morph"}
                beskrivelse={"Experiments with morphogenesis"}
            />
        </Link>
        <Link href="https://github.com/ulrikah/morph">
            <Portal />
        </Link>
    </Row>
    <Row>
        <Link href="https://github.com/ulrikah/rave">
            <Star />
        </Link>
        <Link href="https://github.com/ulrikah/rave">
            <Beskrivelse
                tittel={"Rave"}
                beskrivelse={"Musical agents and reinforcement learning"}
            />
        </Link>
    </Row>
    <Row>
        <Link href="https://ulrikah.no/tegne">
            <Wave />
        </Link>
        <Link href="https://ulrikah.no/tegne">
            <Beskrivelse
                tittel={"Bølger"}
                beskrivelse={"Drawable, audible waveforms in the browser"}
            />
        </Link>
    </Row>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        border-top: 1px solid black;
        border-right: 1px solid black;
        width: 90%;
    }

    p {
        margin: 0 auto;
        padding: 1rem;
    }
</style>
