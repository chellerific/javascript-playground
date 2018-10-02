/* WEBSOCKET SERVER EXAMPLE IN NODE.JS
Can be used in implementing a client, and use websockets
to communicate between two backend services */

//Install WS first
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080})

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`)

    })
    ws.send('ho!')
})