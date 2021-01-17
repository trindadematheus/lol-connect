const express = require('express')
const cors = require('cors')

const ngrok = require('./routes/ngrok')
const lolclient = require('./routes/lolclient')
const authenticateLOL = require('./middleware/authenticateLOL')

const app = express()

app.use(cors())

app.use('/ngrok', authenticateLOL, ngrok)
app.use('/lol-client', authenticateLOL, lolclient)

app.listen(3000, () => {
  console.log(`Node Server APP listening at http://localhost:3000`)
})
