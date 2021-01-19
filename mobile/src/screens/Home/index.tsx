import React, { useEffect, useState } from 'react';
import { View, Text, StatusBar, Image, ImageBackground, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';

import { useLOLClient } from '../../hooks/lol-client';
import { Summoner } from '../../types/api';

import Loading from '../Loading'

import S from './styles'
import getRankedBadge from '../../utils/getRankBadge';
import History from '../../components/History';

const Home: React.FC = () => {
  const [summoner, setSummoner] = useState<Summoner>()
  const [sumonnerProgressLVL, setSumonnerProgressLVL] = useState(0)

  const { getCurrentSummoner } = useLOLClient()

  useEffect(() => {
    getCurrentSummoner()
      .then((data) => {
        setSummoner(data)

        if (data) {
          setSumonnerProgressLVL(data.percentCompleteForNextLevel / 100)
        }
      })
      .catch(e => console.log({ e }))
  }, [])

  if (!summoner) {
    return <Loading />
  } else {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <View style={S.container} >
          <ImageBackground style={S.background} source={{ uri: `https://cdn.communitydragon.org/11.1.1/champion/${summoner.masteries[0].championId}/splash-art/centered` }}>

            <View style={S.profileArea}>
              <Image
                style={S.profileIcon}
                source={{ uri: `http://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${summoner.profileIconId}.png` }}
              />

              <View style={S.profileInfoWrapper}>
                <Text style={S.nickName}>{summoner.displayName}</Text>

                <View style={S.levelWrapper}>
                  <Text style={S.level}>{summoner.summonerLevel}</Text>
                  <Progress.Bar borderColor="#D5B26E" color="#0F7992" style={S.progressBar} progress={sumonnerProgressLVL} width={150} />
                </View>
              </View>
            </View>
          </ImageBackground>

          <ScrollView>
            <View style={S.statsSection} >
              <View style={S.statsItem} >
                <Image style={S.statsImage} source={{ uri: getRankedBadge(summoner.rank.highestRankedEntry.tier) }} />
                <Text style={S.statsTitle} >Rank</Text>
                <Text style={S.statsDesc} >{summoner.rank.highestRankedEntry.tier} {summoner.rank.highestRankedEntry.division}</Text>
              </View>
              <View style={S.statsItem} >
                <Image style={S.statsImage} source={{ uri: `https://cdn.communitydragon.org/10.18.1/honor/${summoner.honor.honorLevel}` }} />
                <Text style={S.statsTitle} >Honra</Text>
                <Text style={S.statsDesc} >Nivel {summoner.honor.honorLevel}</Text>
              </View>
              <View style={S.statsItem} >
                <Image style={S.statsImage} source={{ uri: `https://cdn.communitydragon.org/11.1.1/champion/${summoner.masteries[0].championId}/square` }} />
                <Text style={S.statsTitle} >Maestria {summoner.masteries[0].championLevel}</Text>
                <Text style={S.statsDesc} >{summoner.masteries[0].formattedChampionPoints}</Text>
              </View>
            </View>

            <View style={S.separator} />

            <History />
          </ScrollView>
        </View>
      </>
    );
  }
}

export default Home;