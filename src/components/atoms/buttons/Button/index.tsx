import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from './types';
import { styles } from './styles';

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
