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
  },
});

const formattedImages: Function = (images: Array<icon>) => {
  console.log('formattedImages ' + images.length);
  const imageComponents = images.map(image => {
    const style = {
      height: image.height,
      width: image.width,
      resizeMode: 'contain',
    };
    return <Image style={style} source={image.src} />;
  });
  return embed(imageComponents, images);
};

const embed: Function = (
  imageComponents: Array<Object>,
  images: Array<Icon>,
) => {
  const embeddedImages = [];
  const containerStyle = {
    height: '60%',
    width: '100%',
    flexDirection: 'row',
  };

  for (var i = 0; i < images.length; i++) {
    var k = 0;
    if (images[i].height !== '100%') {
      embeddedImages[i] = imageComponents[i];
    } else {
      const list = [imageComponents[i], imageComponents[i + 1]];
      k = 1;
      if (images[i + 2]) {
        if (images[i + 2].height === '100%') {
          list[3] = imageComponents[i + 2];
          k = 2;
        }
      }
      embeddedImages[i] = <View style={containerStyle}>{list}</View>;
      i = i + k;
    }
  }

  return embeddedImages;
};

export default Oracle;
