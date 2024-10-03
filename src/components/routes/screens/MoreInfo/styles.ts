import { StyleSheet } from 'react-native';
import { COLOR, PADDING, RADIUS } from 'src/constants/theme';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  error: {
    color: COLOR.NEGATIVE,
    fontSize: 60,
    textAlign: 'center',
    fontWeight: '600',
  },
  textBox: {
    padding: PADDING.P20,
    gap: PADDING.P20,
    backgroundColor: COLOR.SUBTEXT,
    borderRadius: RADIUS.R20,
    margin: PADDING.P20,
  },
  text: {
    color: COLOR.FOREGROUND,
    fontSize: 20,
    fontWeight: 500,
  },
});
