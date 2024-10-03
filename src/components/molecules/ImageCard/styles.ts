import { StyleSheet } from 'react-native';
import { COLOR, PADDING, RADIUS } from 'src/constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.SUBTEXT,
    padding: PADDING.P20,
    gap: PADDING.P20,
    borderWidth: 1,
    borderRadius: RADIUS.R20,
    marginVertical: 8,
  },
  image: {
    aspectRatio: 1,
    borderRadius: RADIUS.R20,
  },
  text: {
    color: COLOR.FOREGROUND,
  },
});
