/* EXPRESS MODULE EXAMPLES */

//CORS EXAMPLE
const express = require('express')
const cors = require('cors')
const app = express()

//Allows only one origin
const corsOptions = {
    origin: 'https://mydomain.com'
}

//Allows more origins (ASK MU FOR HELP)
const whitelist = ['http://example1.com','http://example1.com']
const corsOptions2 = {
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

app.get('/without cors', (req, res, next) => {
    res.json({ msg: 'no CORS sry'})
})

app.get('/with cors', cors(corsOptions), (req, res, next) => {
    res.json({ msg: 'theres CORS'})
})

const server = app.listen(3000, () => {
    console.log('Listening on port %s', server.address().port)
})