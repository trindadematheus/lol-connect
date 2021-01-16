const express = require('express')
const ngrok = require('ngrok')
const cors = require('cors')

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

app.listen(port, () => {
  console.log(`Node Server APP listening at http://localhost:${port}`)
})
