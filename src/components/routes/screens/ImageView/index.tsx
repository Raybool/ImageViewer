import React from 'react';
import { ImageViewProps } from './types';
import { useImageStore } from 'src/mobx/image';
import { styles } from './styles';
import { Dimensions, Text, View } from 'react-native';
import Animated, {
  clamp,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { observer } from 'mobx-react';

const { width, height } = Dimensions.get('screen');

export const ImageView: React.FC<ImageViewProps> = observer(({ route }) => {
  const scale = useSharedValue(1);

  const { imageId } = route.params;

  const { images } = useImageStore();

  const image = images.find((item) => item.id === imageId);

  const pinch = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = clamp(
        event.scale,
        0.5,
        Math.min(width / 100, height / 100)
      );
    })
    .runOnJS(true);

  const boxAnimatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value < 1 ? 1 : scale.value }],
  }));

  if (!image) {
    return <Text style={styles.error}>Картинка не найдена</Text>;
  }

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pinch}>
        <Animated.Image
          source={{ uri: image.url }}
          style={[styles.image, boxAnimatedStyles]}
        />
      </GestureDetector>
    </View>
  );
});
