import React from 'react';
import { MoreInfoProps } from './types';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { useImageStore } from 'src/mobx/image';
import { styles } from './styles';
import { openImage } from './utils';
import { observer } from 'mobx-react';

export const MoreInfo: React.FC<MoreInfoProps> = observer(({ route }) => {
  const { imageId } = route.params;

  const { images } = useImageStore();

  const image = images.find((item) => item.id === imageId);

  if (!image) {
    return <Text style={styles.error}>Картинка не найдена</Text>;
  }

  return (
    <View>
      <TouchableOpacity onPress={() => openImage(image.id)}>
        <Image style={styles.image} source={{ uri: image.url }} />
      </TouchableOpacity>

      <View style={styles.textBox}>
        <Text style={styles.text}>Название: {image.title}</Text>

        <Text style={styles.text}>Описание: {image.description}</Text>
      </View>
    </View>
  );
});
