import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export type Props = {
  images: Array<Object>;
  loading: Boolean;
};

const Oracle: React.FC<Props> = ({ images, loading }) => {
  return (
    <View style={styles.container}>
      <Text>Image</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
});

export default Oracle;
