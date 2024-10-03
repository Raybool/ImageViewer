import { StyleSheet } from 'react-native';
import { COLOR } from 'src/constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BLACK,
    height: '100%',
    justifyContent: 'center',
  },
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
});
