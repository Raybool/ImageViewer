import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ArrowTopBar } from 'src/components/atoms/icons/ArrowTopBar';
import { SIZE } from 'src/constants/theme';

type Props = {
  onPress: () => void;
};

export const ButtonBack: React.FC<Props> = ({ onPress }) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={onPress}
    style={styles.container}
  >
    <ArrowTopBar />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: SIZE.S30,
    height: SIZE.S30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
