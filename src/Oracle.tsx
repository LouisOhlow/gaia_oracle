import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FormattedImage from './FormattedImage';

export type Props = {
  images: Array<Object>;
  loading: Boolean;
};

const Oracle: React.FC<Props> = ({images, loading = false}) => (
  <View style={styles.container}>{!loading && formattedImages(images)}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstImage: {
    resizeMode: 'contain',
    height: '40%',
  },
  secondImage: {
    height: '60%',
    resizeMode: 'contain',
  },
});

const formattedImages: Function = (images: Array<Object>) => {
  switch (images.length) {
    case 2:
      const random: number = Math.floor(Math.random() * 2);
      return format1(images)[random];
    default:
      return format1(images);
  }
};

const format1: Function = (images: Array<Object>) => [
  <>
    <FormattedImage type="type9x9" image={images[1]} />
    <FormattedImage type="type6x9" image={images[0]} />
  </>,
  <>
    <FormattedImage type="type6x9" image={images[0]} />
    <FormattedImage type="type9x9" image={images[1]} />
  </>,
];

export default Oracle;
