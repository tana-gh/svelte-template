import { writable    } from 'svelte/store'
import { helloSocket } from '../utils/webSockets'
import { helloString } from '../utils/strings'

export const state = writable({
    loading    : true,
    name       : 'world',
    helloText  : helloString('world'),
    contentText: 'content',
    contents   : [] as string[]
})

export const setLoading = (value: boolean): void => {
    state.update(s => ({ ...s, loading: value }))
}

export const setName = (value: string): void => {
    state.update(s => ({ ...s, name: value }))
}

export const setHelloText = (value: string): void => {
    state.update(s => ({ ...s, helloText: value }))
}

export const setContentText = (value: string): void => {
    state.update(s => ({ ...s, contentText: value }))
}

export const addContent = (): void => {
    state.update(s => ({ ...s, contents: [ ...s.contents, s.contentText ]}))
}

export const removeContent = (index: number): void => {
    state.update(s => ({
        ...s,
        contents: [
            ...(
                index > 0
                    ? s.contents.slice(0, index)
                    : []
            ),
            ...(
                index < s.contents.length
                    ? s.contents.slice(index + 1, s.contents.length)
                    : []
            )
        ]
    }))
}

export const sendHello = (hello: string): void => {
    helloSocket.send(hello)
}

export const receiveHello = (hello: string): void => {
    setHelloText(hello)
}
