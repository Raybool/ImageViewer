import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export const IconUnsplash: React.FC = () => (
  <Image source={require('assets/img/unsplash.png')} style={styles.icon} />
);

export const IconSLing: React.FC = () => (
  <Image source={require('assets/img/slingacademy.png')} style={styles.icon} />
);
