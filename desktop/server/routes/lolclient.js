const express = require('express')
const { request } = require("league-connect")

const router = express.Router();

//// X SUMMNOR: /lol-summoner/v1/current-summoner 
/// BG: /lol-summoner/v1/current-summoner/summoner-profile
/// X RANK: /lol-regalia/v2/current-summoner/regalia
/// X MAESTRY: /lol-collections/v1/inventories/{summonerId}/champion-mastery
/// X HONROR: /lol-honor-v2/v1/profile
/// TROFEUS: lol-trophies/v1/current-summoner/trophies/profile
/// X BANDEIRA: /lol-banners/v1/current-summoner/flags/equipped

router.get('/current-summoner', async (req, res) => {
  try {
    const sumonner = await request({
      method: 'GET',
      url: '/lol-summoner/v1/current-summoner'
    }, req.credentials)

    const sumonnerData = await sumonner.json();

    const honror = await request({
      method: 'GET',
      url: '/lol-honor-v2/v1/profile'
    }, req.credentials)

    const rank = await request({
      method: 'GET',
      url: '/lol-regalia/v2/current-summoner/regalia'
    }, req.credentials)

    const maestry = await request({
      method: 'GET',
      url: `/lol-collections/v1/inventories/${sumonnerData.summonerId}/champion-mastery`
    }, req.credentials)

    const maestries = await maestry.json()

    res.json({
      ...sumonnerData,
      honror: await honror.json(),
      rank: await rank.json(),
      maestries: [
        maestries[0],
        maestries[1],
        maestries[2],
      ]
    })
  } catch (error) {
    console.log('[Node Server]: ', error)
  }
})

module.exports = router;