const express = require('express')
const { request } = require("league-connect")

const router = express.Router();

//// X SUMMNOR: /lol-summoner/v1/current-summoner 
/// BG: /lol-summoner/v1/current-summoner/summoner-profile
/// X RANK: /lol-regalia/v2/current-summoner/regalia
/// X masteries: /lol-collections/v1/inventories/{summonerId}/champion-mastery
/// X honor: /lol-honor-v2/v1/profile
/// TROFEUS: lol-trophies/v1/current-summoner/trophies/profile
/// X BANDEIRA: /lol-banners/v1/current-summoner/flags/equipped

router.get('/current-summoner', async (req, res) => {
  try {
    const sumonner = await request({
      method: 'GET',
      url: '/lol-summoner/v1/current-summoner'
    }, req.credentials)

    const sumonnerData = await sumonner.json();

    const honor = await request({
      method: 'GET',
      url: '/lol-honor-v2/v1/profile'
    }, req.credentials)

    const rank = await request({
      method: 'GET',
      url: '/lol-regalia/v2/current-summoner/regalia'
    }, req.credentials)

    const masteriesData = await request({
      method: 'GET',
      url: `/lol-collections/v1/inventories/${sumonnerData.summonerId}/champion-mastery`
    }, req.credentials)

    const masteries = await masteriesData.json()

    res.json({
      ...sumonnerData,
      honor: await honor.json(),
      rank: await rank.json(),
      masteries: [
        masteries[0],
        masteries[1],
        masteries[2],
      ]
    })
  } catch (error) {
    console.log('[Node Server]: ', error)
  }
})

router.post('/match-finded-response', async (req, res) => {
  const { type } = req.body;

  try {
    if (type === 'accept') {
      await request({
        method: 'POST',
        url: '/lol-matchmaking/v1/ready-check/accept'
      }, req.credentials)
    }

    if (type === 'decline') {
      await request({
        method: 'POST',
        url: '/lol-matchmaking/v1/ready-check/decline'
      }, req.credentials)
    }

    res.json({ success: 'ok' })
  } catch (error) {
    console.log('[Node Server]: ', error)
  }
})

module.exports = router;