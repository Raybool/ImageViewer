import { RouteProp } from '@react-navigation/native';
import { APP_SCREENS } from 'src/constants/ui';
import { NavigatorsParamList } from 'src/types';

export type MoreInfoProps = {
  route: RouteProp<NavigatorsParamList, APP_SCREENS.MORE_INFO>;
};
