import { APP_SCREENS } from 'src/constants/ui';
import { redirect } from 'src/navigation';

export const openImageCard = (imageId: number) =>
  redirect({
    name: APP_SCREENS.MORE_INFO,
    params: { imageId },
  });
