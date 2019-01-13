/*
const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


*/

var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

const port = 3001

// Serve up public/ftp folder
var serve = serveStatic('public', {'index': ['index.html']})

// Create server
var server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(port, () => console.log(`Example widget app listening on port ${port}!`))