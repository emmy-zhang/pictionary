/**
 * Module dependencies.
 */
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const http = require('http').createServer(app)
const io = require('socket.io')(http)

/**
 * Controllers.
 */
const gameController = require('./controllers/game')

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000)
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(path.join(__dirname, '..', 'dist'), { maxAge: 31557600000 }))

/*
 * App API routes.
 */
app.get('/games', gameController.getGames)
app.post('/games/add', gameController.postGameCreate)
app.post('/games/remove', gameController.postGameRemove)
app.post('/games/users/add', gameController.postGameUsersAdd)
app.post('/games/users/remove', gameController.postGameUsersRemove)

/**
 * Socket.io configuration.
 */
io.on('connection', (socket) => {
  socket.on('new_game', (data) => {
    console.log(`New game created by user id ${data.creator_id}: '${data.body}'`)
    socket.broadcast.emit('new_game', data)
  })
  socket.on('new_message', (data) => {
    console.log(`Message received from user id ${data.sender_id}: '${data.body}'`)
    socket.broadcast.emit('new_message', data)
  })
})

http.listen(app.get('port'), () => {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'))
})

module.exports = app
