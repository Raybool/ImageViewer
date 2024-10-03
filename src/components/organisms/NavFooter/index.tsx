import React from 'react';
import { NavFooterProps } from './types';
import { View } from 'react-native';
import { NavButton } from 'src/components/atoms/buttons/NavButton';
import { useImageStore } from 'src/mobx/image';
import { IconSLing, IconUnsplash } from './Elements';
import { styles } from './styles';
import { observer } from 'mobx-react';

export const NavFooter: React.FC<NavFooterProps> = observer(() => {
  const { changeStock } = useImageStore();

  return (
    <View style={styles.container}>
      <NavButton
        icon={<IconSLing />}
        title="SLingAcademy"
        onPress={() => changeStock(0)}
      />

      <NavButton
        icon={<IconUnsplash />}
        title="Unsplash"
        onPress={() => changeStock(1)}
      />
    </View>
  );
});
