<script lang="ts">
import { state, removeContent } from '../store'

let contents: string[] = []

state.subscribe(s => contents = s.contents)
</script>

<template>
    <ul>
        { #each contents as c, i (`${i} ${c}`) }
            <li on:click={() => removeContent(i)}>{ c }</li>
        { /each }
    </ul>
</template>

<style lang="scss">
</style>
