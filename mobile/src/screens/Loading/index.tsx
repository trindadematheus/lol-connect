import React from 'react';
import { View, StatusBar, ActivityIndicator } from 'react-native';

import S from './styles'

const Home: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#000" barStyle="dark-content" />

      <View style={S.container} >
        <ActivityIndicator size="small" color="#D5B26E" />
      </View>
    </>
  );
}

export default Home;