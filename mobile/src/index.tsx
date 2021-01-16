import React from 'react';
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';
import { LOLClientProvider } from './hooks/lol-client';

const { width } = Dimensions.get('window');

import Routes from './routes'

const App: React.FC = () => {
  let rem = 14;

  if (width > 768) {
    rem = 30;
  } else if (width > 414) {
    rem = 21;
  } else if (width > 375) {
    rem = 18;
  } else if (width > 320) {
    rem = 16;
  }

  EStyleSheet.build({
    $rem: rem
  });

  return (
    <LOLClientProvider>
      <Routes />
    </LOLClientProvider>
  );
}

export default App;