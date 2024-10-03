import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React from 'react';
import { Text, View } from 'react-native';

import { Box } from 'src/components/atoms/Box';
import { ButtonBack } from 'src/components/atoms/buttons/ButtonBack';
import { styles } from './styles';
import { HeaderProps } from './types';

export const NavigationHeader = ({
  navigation,
  options,
}: {
  navigation: StackNavigationProp<Record<string, object | undefined>>;
  options: StackNavigationOptions;
}) => (
  <Header
    headerRight={options.headerRight}
    headerLeft={options.headerLeft}
    navigation={navigation}
    title={options.title}
    cardOverlayEnabled={options.cardOverlayEnabled}
  />
);

export const Header: React.FC<HeaderProps> = ({
  headerLeft,
  headerRight,
  navigation,
  style,
  title,
  cardOverlayEnabled = false,
}) => (
  <View style={[styles.container, style]}>
    <View style={styles.back}>
      <Box visible={!!headerLeft}>{headerLeft && headerLeft({})}</Box>

      <Box visible={!headerLeft && !cardOverlayEnabled}>
        <ButtonBack onPress={navigation.goBack} />
      </Box>
    </View>

    <Text style={styles.title}>{title}</Text>

    <View style={styles.hint}>{headerRight && headerRight({})}</View>
  </View>
);
