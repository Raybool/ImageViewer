import { StyleSheet } from 'react-native';
import { COLOR } from 'src/constants/theme';

export const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: COLOR.SUCCESS_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  icon: {
    height: 30,
    aspectRatio: 1,
  },
});
