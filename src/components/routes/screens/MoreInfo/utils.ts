import { APP_SCREENS } from 'src/constants/ui';
import { redirect } from 'src/navigation';

export const openImage = (imageId: number) =>
  redirect({
    name: APP_SCREENS.IMAGE_VIEW,
    params: { imageId },
  });
