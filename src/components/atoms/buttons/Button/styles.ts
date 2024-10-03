import { StyleSheet } from 'react-native';
import { COLOR, PADDING, RADIUS } from 'src/constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.POSITIVE,
    paddingHorizontal: PADDING.P20,
    paddingVertical: PADDING.P10,
    borderRadius: RADIUS.R20,
    alignItems: 'center',
  },
  title: {
    color: COLOR.FOREGROUND,
    fontSize: 20,
  },
});
