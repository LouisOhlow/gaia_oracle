import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

export type Props = {
  images: Array<Object>;
  loading: Boolean;
};

const Oracle: React.FC<Props> = ({images, loading = false}) => (
  <View style={styles.container}>
    {!loading && (
      <>
        <Image style={styles.firstImage} source={images[1]} />
        <Image style={styles.secondImage} source={images[0]} />
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstImage: {
    width: '100%',
    height: '60%',
  },
  secondImage: {
    width: '100%',
    height: '40%',
  },
});

export default Oracle;
