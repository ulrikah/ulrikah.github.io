<div class="flex-item">
    <slot />
</div>

<style>
    .flex-item {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin: 0 auto;
        padding: 1rem 0;
        border-bottom: 1px solid black;
    }

    @media (orientation: landscape) {
        .flex-item {
            padding: 3rem 0;
        }
    }
</style>
