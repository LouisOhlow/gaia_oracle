import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {icon} from './App';

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
    backgroundColor: 'green',
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

const formattedImages: Function = (images: Array<icon>) => {
  console.log('formattedImages ' + images.length);
  return images.map(image => {
    const style = {
      height: image.height,
      width: image.width,
      resizeMode: 'contain',
      backgroundColor: 'red',
    };
    return <Image style={style} source={image.src} />;
  });
};

export default Oracle;
