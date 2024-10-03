import { COLOR, PADDING, SIZE } from 'src/constants/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.FOREGROUND,
    paddingHorizontal: PADDING.P20,
    paddingVertical: PADDING.P10,
  },
  back: {
    width: SIZE.S30,
    aspectRatio: 1,
  },
  hint: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE.S30,
    aspectRatio: 1,
  },
  title: {
    color: COLOR.PRIMARY,
  },
});
