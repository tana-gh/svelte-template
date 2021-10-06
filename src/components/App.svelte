<script lang="ts">
import { Router, Route }     from 'svelte-routing'
import IndexPage             from './IndexPage.svelte'
import HelloPage             from './HelloPage.svelte'
import NotFoundPage          from './NotFoundPage.svelte'
import { state, setLoading } from '../store'

export let url = ''

let loading: boolean

state.subscribe(s => loading = s.loading)

setTimeout(() => setLoading(false), 1000)
</script>

<template>
    <Router {url}>
        <header>
            <div>
                <h1>Svelte Page</h1>
            </div>
        </header>
        <main>
            { #if loading }
                <p>Loading...</p>
            { :else }
                <Route path="/hello/:name" component={HelloPage}/>
                <Route path="/hello"       component={HelloPage}/>
                <Route path="/"            component={IndexPage}/>
                <Route                     component={NotFoundPage}/>
            { /if }
        </main>
    </Router>
</template>

<style lang="scss">
</style>
