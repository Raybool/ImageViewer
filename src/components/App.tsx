import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'src/components/providers/Provider';
import { Navigators } from 'src/components/routes/navigator';

export const App: React.FC = () => (
  <Provider>
    <StatusBar barStyle="dark-content" />

    <Navigators />
  </Provider>
);
