import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { APP_SCREENS } from 'src/constants/ui';

import { NavigatorsParamList } from 'src/types';
import { Home } from 'src/components/routes/screens/Home';
import { MoreInfo } from 'src/components/routes/screens/MoreInfo';
import { ImageView } from 'src/components/routes/screens/ImageView';
import { NavigationHeader } from 'src/components/molecules/Header';

const { Navigator, Screen } = createStackNavigator<NavigatorsParamList>();

export const Navigators: React.FC = () => {
  return (
    <Navigator
      initialRouteName={APP_SCREENS.HOME}
      screenOptions={{
        header: NavigationHeader,
      }}
    >
      <Screen
        name={APP_SCREENS.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen name={APP_SCREENS.MORE_INFO} component={MoreInfo} />
      <Screen name={APP_SCREENS.IMAGE_VIEW} component={ImageView} />
    </Navigator>
  );
};
