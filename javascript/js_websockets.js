/**
 * NOTES FOR WEBSOCKETS IN JAVASCRIPT
 */

const url = 'wss://myserver.com/stuff'
const conn = new WebSocket(url)

//Listen
conn.onopen = () => {
    //..
    conn.send('hey')
}

//Receiving
conn.onmessage = e => {
    console.log(e.data)
}

//Error
conn.onerror = error => {
    console.log(`WebSocket error: ${error}`)
}