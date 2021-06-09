<script lang="ts">
import Contents                                                  from './Contents.svelte'
import { state, setName, setContentText, addContent, sendHello } from '../store'
import { helloString, contentCountString }                       from '../utils/strings';

let name       : string
let helloText  : string
let contentText: string
let contents   : string[]

$: contentCountText = contentCountString(contents.length)

state.subscribe(s => {
    name        = s.name
    helloText   = s.helloText
    contentText = s.contentText
    contents    = s.contents
})
</script>

<template>
    <article>
        <section>
            <div>
                <h2>{ helloText }</h2>
                <input value={name} on:change={ev => setName(ev.currentTarget.value)}>
                <button on:click={() => sendHello(helloString(name))}>Hello</button>
            </div>
        </section>
        <section>
            <div>
                <h3>{ contentCountText }</h3>
                <input value={contentText} on:change={ev => setContentText(ev.currentTarget.value)}>
                <button on:click={() => addContent()}>Add one content</button>
                <div>
                    <Contents/>
                </div>
            </div>
        </section>
    </article>
</template>

<style lang="scss">
</style>
