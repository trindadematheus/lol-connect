import React, { useEffect, useState } from 'react';
import { View, Modal, ImageBackground, Text, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import axios from 'axios';

import { useEventsOverlay } from '../../../hooks/events-overlay';

import S from './styles'
import { useLOLClient } from '../../../hooks/lol-client';

const MatchFinded: React.FC = () => {
  const [progress, setProgress] = useState(0)
  const [subTitle, setSubTitle] = useState('ENCONTRADA')

  const { showMatchFinded, setShowMatchFinded } = useEventsOverlay()
  const { ngrokLink } = useLOLClient()

  useEffect(() => {
    if (showMatchFinded) {
      const timer = setInterval(() => {
        setProgress(state => {
          if (state >= 1) {
            setShowMatchFinded(false)
            clearInterval(timer)
          }

          return state + 0.2
        })

      }, 1000)
    }
  }, [showMatchFinded])

  async function handleResponse(type: string) {
    await axios.post(`${ngrokLink}/lol-client/match-finded-response`, {
      type
    })

    type === 'accept' ? setSubTitle('ACEITADA') : setSubTitle('RECUSADA')
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showMatchFinded}
    >
      <View style={S.fullscreen} >
        <ImageBackground source={{ uri: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/clash-2018/pt_BR/a46e742ae82f9d4f9db8e34ba57873e513e727b7/assets/static/img/backgrounds/team-creation-bg.jpg' }} style={S.container} >
          <Progress.Bar borderColor="#D5B26E" color="#0F7992" style={S.progressBar} progress={progress} width={280} height={15} />
          <Text style={S.title}>PARTIDA</Text>
          <Text style={S.title}>{subTitle}</Text>

          <TouchableOpacity onPress={() => handleResponse('accept')} activeOpacity={0.7} style={S.acceptButton}>
            <Text style={S.acceptText}>ACEITAR!</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleResponse('decline')} activeOpacity={0.7} style={S.declineButton}>
            <Text style={S.declineText}>RECUSAR</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Modal>
  );
}

export default MatchFinded;