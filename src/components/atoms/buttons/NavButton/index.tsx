import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { NavButtonProps } from './types';
import { styles } from './styles';

export const NavButton: React.FC<NavButtonProps> = ({
  icon,
  title,
  onPress,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    {icon}

    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);
