import { COLOR } from './constants/theme';
import { NavigationParams } from './navigation';

export type NavigatorsParamList = {
  Home: undefined;
  MoreInfo: {
    from: NavigationParams<{}>;
    imageId: number;
  };
  ImageView: {
    from: NavigationParams<{}>;
    imageId: number;
  };
};

export type IconBaseProps = {
  fill?: COLOR;
  size?: number;
};

export type SuccessAPI = {
  success: boolean;
  total_photos: number;
  message: string;
  offset: number;
  limit: number;
  photos: PhotosAPIType[];
};

export type PhotosAPIType = {
  url: string;
  title: string;
  user: number;
  id: number;
  description: string;
};
