import { StyleSheet } from 'react-native';
import { COLOR, PADDING, SIZE } from 'src/constants/theme';

export const styles = StyleSheet.create({
  container: {
    gap: PADDING.P10,
    height: '100%',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '600',
  },
  flatList: {
    paddingHorizontal: PADDING.P10,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLOR.FOREGROUND,
    paddingHorizontal: PADDING.P20,
    paddingVertical: PADDING.P10,
  },
  hint: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE.S30,
    aspectRatio: 1,
  },
});
