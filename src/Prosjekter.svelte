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
            Here are some projects I've worked on the last couple of years
        </p>
    </Row>
    <Row>
        <Link href="/posts/peers">
            <Beskrivelse
                tittel={"Peers"}
                beskrivelse={"Platform for peer-to-peer voice and video communication"}
            />
        </Link>
        <Link href="/posts/peers">
            <Peers />
        </Link>
    </Row>
    <Row>
        <Link href="https://github.com/ulrikah/rave">
            <Star />
        </Link>
        <Link href="https://github.com/ulrikah/rave">
            <Beskrivelse
                tittel={"Rave"}
                beskrivelse={"Adaptive audio processing with reinforcement learning"}
            />
        </Link>
    </Row>
    <Row>
        <Link
            href="https://blogg.blank.no/interaktive-musikkopplevelser-i-vr-36ceb2f9b9b7"
        >
            <Beskrivelse
                tittel={"Blank"}
                beskrivelse={"Exploration of musical interactions in virtual reality. This project was developed as part of a scholarship that I received from Blank"}
            />
        </Link>
        <Link
            href="https://blogg.blank.no/interaktive-musikkopplevelser-i-vr-36ceb2f9b9b7"
        >
            <Blank />
        </Link>
    </Row>
    <Row>
        <Link href="https://ulrikah.no/morph">
            <Portal />
        </Link>
        <Link href="https://ulrikah.no/morph">
            <Beskrivelse
                tittel={"Morph"}
                beskrivelse={"Experiments with morphogenesis"}
            />
        </Link>
    </Row>
    <Row>
        <Link href="https://ulrikah.no/waveform">
            <Beskrivelse
                tittel={"Bølger"}
                beskrivelse={"Drawable, audible waveforms in the browser"}
            />
        </Link>
        <Link href="https://ulrikah.no/waveform">
            <Wave />
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
