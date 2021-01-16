import React from 'react';
import { View } from 'react-native';
import { useLOLClient } from '../../hooks/lol-client';

const Home: React.FC = () => {
  const { getCurrentSummoner } = useLOLClient()

  getCurrentSummoner()
  return <View />;
}

export default Home;