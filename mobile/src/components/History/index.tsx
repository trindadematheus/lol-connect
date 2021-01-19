import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Image, Text, ImageBackground } from 'react-native';
import { format } from 'date-fns'

import { useLOLClient } from '../../hooks/lol-client';

import S from './styles'

interface Participant {
  championId: number;
  spell1Id: number;
  spell2Id: number;
  stats: {
    kills: number;
    deaths: number;
    assists: number;
    win: boolean;
  }
}

interface Match {
  gameCreationDate: string;
  participants: Participant[]
}

interface Spell {
  key: string;
  icon: string;
}

const History: React.FC = () => {
  const [matches, setMatches] = useState<Match[]>([])
  const [spells, setSpells] = useState<Spell[]>([])

  const { ngrokLink } = useLOLClient()

  useEffect(() => {
    axios.get(`${ngrokLink}/lol-client/match-history`)
      .then(({ data }) => setMatches(data.games.games.reverse()))

    axios.get('https://raw.githubusercontent.com/ngryman/lol-spells/master/spells.json')
      .then(({ data }) => setSpells(data))
  }, [])

  const getSpell = (spellId: number): string => {
    const id = spellId.toString()

    const spellFinded = spells.find(spell => spell.key === id)

    if (!spellFinded) {
      return 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/spell/SummonerDarkStarChampSelect1.png';
    }

    return spellFinded.icon;
  }

  return (
    <>
      <View>
        {matches.map(match => (
          <>
            <ImageBackground imageStyle={{ opacity: 0.1 }} style={{ ...S.container, borderLeftColor: match.participants[0].stats.win ? '#49b4ff' : '#ff5757' }} source={{ uri: `https://cdn.communitydragon.org/11.1.1/champion/${match.participants[0].championId}/splash-art/centered` }} >
              <Image style={S.champIcon} source={{ uri: `https://cdn.communitydragon.org/11.1.1/champion/${match.participants[0].championId}/square` }} />

              <View>
                {match.participants[0].stats.win ? (
                  <Text style={S.win}>VITÓRIA</Text>
                ) : (
                    <Text style={S.lose}>DERROTA</Text>
                  )}

                <View style={S.spells}>
                  <Image style={{ ...S.spell, marginRight: 5 }} source={{ uri: getSpell(match.participants[0].spell1Id) }} />
                  <Image style={S.spell} source={{ uri: getSpell(match.participants[0].spell2Id) }} />
                </View>
              </View>

              <View style={{ marginLeft: 20 }} >
                <Text style={S.kda} >{`${match.participants[0].stats.kills}/${match.participants[0].stats.deaths}/${match.participants[0].stats.assists}`}</Text>
                <Text style={S.date}>{format(new Date(match.gameCreationDate), 'dd/MM/yyyy')}</Text>
              </View>
            </ImageBackground>
          </>
        ))}
      </View>
    </>
  );
}

export default History;