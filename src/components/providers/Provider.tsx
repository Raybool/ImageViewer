import React, { ReactNode } from 'react';

import { NavigationProvider } from 'src/navigation/NavigationProvider';

import { ThemeProvider } from './ThemeProvider';

type Props = {
  children: ReactNode;
};

export const Provider: React.FC<Props> = ({ children }) => (
  <NavigationProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </NavigationProvider>
);
