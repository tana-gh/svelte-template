<script lang="ts">
import { Route } from 'svelte-router-spa'
import { state } from '../store'

export let currentRoute: string

let loading: boolean

state.subscribe(s => loading = s.loading)
</script>

<template>
    <header>
        <div>
            <h1>Svelte Page</h1>
        </div>
    </header>
    <main>
        { #if loading }
            <p>Loading...</p>
        { :else }
            <Route {currentRoute}/>
        { /if }
    </main>
</template>

<style lang="scss">
</style>
