<script lang="ts">
import { navigateTo } from 'svelte-router-spa'
</script>

<template>
    <article>
        <div>
            <button on:click={() => navigateTo('/hello')}>Hello</button>
        </div>
    </article>
</template>

<style lang="scss">
</style>
