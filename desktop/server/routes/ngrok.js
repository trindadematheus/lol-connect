const express = require('express')
const ngrok = require('ngrok')

const router = express.Router();

router.get('', async (req, res) => {
  try {
    await ngrok.disconnect()
    await ngrok.kill()
    const url = await ngrok.connect(3000)

    res.json({
      url: url
    })
  } catch (error) {
    console.log('[Node Server]: ', error)
  }
})

module.exports = router;