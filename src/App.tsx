import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';
import Oracle from './Oracle';
import {allFormats} from './formatVariations';
import {getRandomImageByFormat} from './images';
import {getRandomItem} from './utils';

export type icon = {
  height: string;
  width: string;
  src: Object;
  format: string;
};

export class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      images: [],
    };
  }

  randomImage: Function = () => {
    const formatVariation: Array<icon> = getRandomItem(allFormats);
    const randomImages = JSON.parse(JSON.stringify(formatVariation));

    for (var i = 0; i < formatVariation.length; i++) {
      const image = getRandomImageByFormat(formatVariation[i].format);
      const duplicate = randomImages.find(
        imageObject => imageObject.src === image,
      );
      if (duplicate) {
        i--;
      } else {
        randomImages[i].src = image;
      }
    }
    this.setState({
      images: randomImages,
    });
  };

  render() {
    const images: Array<Object> = this.state.images;
    return (
      <View style={styles.container}>
        <View style={styles.oracleContainer}>
          <Oracle loading={false} images={images} />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.randomImage();
          }}>
          <Text style={styles.buttonTitle}> tell me my future </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  button: {
    height: '6%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'black',
    backgroundColor: 'black',
    borderWidth: 5,
    top: 180,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  oracleContainer: {
    height: 500,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    top: 140,
  },
});
