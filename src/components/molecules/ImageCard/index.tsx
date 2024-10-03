import React from 'react';

import { Image, Text, TouchableOpacity } from 'react-native';

import { ImageCardProps } from './types';
import { styles } from './styles';

export const ImageCard: React.FC<ImageCardProps> = ({
  url,
  title,
  onPress,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image style={styles.image} source={{ uri: url }} />

    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
