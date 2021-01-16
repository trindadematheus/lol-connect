const express = require('express')
const ngrok = require('ngrok')
const cors = require('cors')
const https = require('https')
const { request } = require('league-connect')

const app = express()
const port = 3000

app.use(cors())

app.get('/ngrok/:port', async (req, res) => {
  const { port } = req.params

  try {
    const url = await ngrok.connect(parseInt(port))

    res.json({
      url: url
    })
  } catch (error) {
    console.log('[Node Server]: ', error)
  }
})

app.delete('/ngrok/delete', async (req, res) => {
  try {
    await ngrok.disconnect()
    await ngrok.kill()
  } catch (error) {
    console.log('[Node Server]: ', error)
  }
})

app.listen(port, () => {
  console.log(`Node Server APP listening at http://localhost:${port}`)
})
