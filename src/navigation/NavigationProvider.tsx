import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode } from 'react';

import { navigationRef } from 'src/navigation';

type Props = {
  children: ReactNode;
};

export const NavigationProvider: React.FC<Props> = ({ children }) => (
  <NavigationContainer ref={navigationRef}>{children}</NavigationContainer>
);
