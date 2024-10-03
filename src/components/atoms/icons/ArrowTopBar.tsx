import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { COLOR } from 'src/constants/theme';

import { IconBaseProps } from 'src/types';

export const ArrowTopBar: React.FC<IconBaseProps> = ({
  size = 16,
  fill = COLOR.SUBTEXT,
}) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M3.82843 6.9999H16V8.9999H3.82843L9.1924 14.3638L7.7782 15.778L0 7.9999L7.7782 0.22168L9.1924 1.63589L3.82843 6.9999Z"
      fill={fill}
    />
  </Svg>
);
