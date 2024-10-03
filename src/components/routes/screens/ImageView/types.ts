import { RouteProp } from '@react-navigation/native';
import { APP_SCREENS } from 'src/constants/ui';
import { NavigatorsParamList } from 'src/types';

export type ImageViewProps = {
  route: RouteProp<NavigatorsParamList, APP_SCREENS.IMAGE_VIEW>;
};
