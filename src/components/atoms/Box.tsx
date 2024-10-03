import React from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from 'react-native';

type Props = {
  visible?: boolean;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onLayout?: (event: LayoutChangeEvent) => void;
};

export const Box: React.FC<Props> = ({
  children,
  style,
  visible = true,
  onLayout,
}) =>
  visible ? (
    <View style={style} onLayout={onLayout}>
      {children}
    </View>
  ) : null;
