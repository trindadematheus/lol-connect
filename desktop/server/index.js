const cors = require('cors')
const bodyParser = require('body-parser')
const { connect, authenticate } = require('league-connect')

const ngrok = require('./routes/ngrok')
const lolclient = require('./routes/lolclient')
const authenticateLOL = require('./middleware/authenticateLOL')

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(bodyParser.json())
app.use(cors())

app.use('/ngrok', authenticateLOL, ngrok)
app.use('/lol-client', authenticateLOL, lolclient)

io.on('connection', async socket => {
  const credentials = await authenticate()
  const ws = await connect(credentials)

  // Partida encontrada
  ws.subscribe('/lol-matchmaking/v1/ready-check', (data) => {
    socket.emit('MATCH_FINDED', data)
  })

  // Convite para partida
  ws.subscribe('/lol-lobby/v2/received-invitations', (data, event) => {
    socket.emit('RECEIVED_INVITATIONS')
  })

  // handle the event sent with socket.emit()
  // socket.on('salutations', (elem1, elem2, elem3) => {
  //   console.log(elem1, elem2, elem3);
  // });
});

http.listen(3000, function () {
  console.log(`Node Server APP listening at http://localhost:3000`)
});
