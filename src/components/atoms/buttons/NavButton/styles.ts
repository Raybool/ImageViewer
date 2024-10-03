import { StyleSheet } from 'react-native';
import { COLOR, PADDING } from 'src/constants/theme';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLOR.SUBTEXT,
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: PADDING.P20,
  },
  title: {
    color: COLOR.BLACK,
    fontSize: 20,
  },
});
