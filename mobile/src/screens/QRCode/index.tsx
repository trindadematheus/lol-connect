import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { useNavigation } from '@react-navigation/native';

import S from './styles'
import { useLOLClient } from '../../hooks/lol-client';

const QRCode: React.FC = () => {
  const { navigate } = useNavigation();

  const { setCredentials } = useLOLClient()

  const onSuccess = (e: any) => {
    setCredentials(JSON.parse(e.data))
    navigate('Home')
  }

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />

      <View style={S.container}>
        <QRCodeScanner
          onRead={onSuccess}
          topContent={(
            <>
              <Text style={S.title} >Leia o QRCode do computador</Text>
            </>
          )}
        />
      </View>
    </>
  );
}

export default QRCode;