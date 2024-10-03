import { StyleProp, ViewStyle } from 'react-native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';

export type HeaderProps = {
  headerLeft?: StackNavigationOptions['headerLeft'];
  headerRight?: StackNavigationOptions['headerRight'];
  navigation: StackNavigationProp<Record<string, object | undefined>>;
  style?: StyleProp<ViewStyle>;
  title?: string;
  cardOverlayEnabled?: boolean;
};
