import { NavigationContainerRef } from '@react-navigation/native';
import { createRef } from 'react';

import { APP_SCREENS } from 'src/constants/ui';
import { NavigatorsParamList } from 'src/types';

export const navigationRef =
  createRef<NavigationContainerRef<NavigatorsParamList>>();

export type NavigationParams<T> = {
  name: APP_SCREENS;
  params?: T;
};

export const goBack = () => navigationRef.current?.goBack();

export const redirect = <T extends Object = {}>({
  name,
  params,
}: // eslint-disable-next-line @typescript-eslint/no-explicit-any
NavigationParams<T>) => navigationRef.current?.navigate(name as any, params);
