import { setLoading, receiveHello } from '../store'

export const helloSocket = new WebSocket('wss://echo.websocket.org')
helloSocket.addEventListener('open', () => setLoading(false))
helloSocket.addEventListener('message', (ev: MessageEvent<any>) => receiveHello(ev.data))
