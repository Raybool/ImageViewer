import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { useImageStore } from 'src/mobx/image';
import { ImageCard } from 'src/components/molecules/ImageCard';
import { Button } from 'src/components/atoms/buttons/Button';

import { openImageCard } from './utils';
import { observer } from 'mobx-react';
import { Grid } from 'src/components/atoms/icons/Grid';
import { Column } from 'src/components/atoms/icons/Column';
import { NavFooter } from 'src/components/organisms/NavFooter';

export const Home: React.FC = observer(() => {
  const { images, getImage, isEnd } = useImageStore();

  const [isLine, setIsLine] = useState(true);

  useEffect(() => {
    getImage();
  }, [getImage]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>IMAGE VIEWER</Text>

        <View style={styles.hint}>
          <TouchableOpacity onPress={() => setIsLine((flag) => !flag)}>
            {isLine ? <Column /> : <Grid />}
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        key={isLine ? 'column' : 'grid'}
        style={styles.flatList}
        data={images}
        numColumns={isLine ? 1 : 2}
        renderItem={({ item }) => (
          <ImageCard
            url={item.url}
            title={item.title}
            onPress={() => openImageCard(item.id)}
          />
        )}
        ListFooterComponent={
          !isEnd ? <Button onPress={getImage} title="Ещё" /> : null
        }
      />

      <NavFooter />
    </View>
  );
});
