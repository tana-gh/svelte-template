<script lang="ts">
import { navigate } from 'svelte-routing'
</script>

<template>
    <article>
        <div>
            <button on:click={() => navigate('/hello')}>Hello</button>
        </div>
    </article>
</template>

<style lang="scss">
</style>
