import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';
import Oracle from './Oracle';
import {allFormats} from './formatVariations';
import {getRandomImageByFormat} from './images';
import {getRandomItem} from './utils';
import SplashScreen from 'react-native-splash-screen';

export type icon = {
  height: string;
  width: string;
  src: Object;
  format: string;
};

export class App extends React.Component {
  constructor(props: any) {
    super(props);
    const src = require('./res/images/3x9/GAYA-ISOTYPES-112.png');
    const height = '20%';
    const width = '100%';
    const startImages = [
      {
        height,
        width,
        src,
      },
      {
        height,
        width,
        src,
      },
      {
        height,
        width,
        src,
      },
      {
        height,
        width,
        src,
      },
      {
        height,
        width,
        src,
      },
    ];

    this.state = {
      images: startImages,
      showInfo: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  randomImage: Function = () => {
    const formatVariation: Array<icon> = getRandomItem(allFormats);
    const randomImages = JSON.parse(JSON.stringify(formatVariation));
    const typoImages = [];
    for (var i = 0; i < formatVariation.length; i++) {
      const {chosenImage: image, isTypo} = getRandomImageByFormat(
        formatVariation[i].format,
      );
      const hasAlreadyTypo = isTypo && typoImages.length >= 1;
      if (isTypo) {
        typoImages[0] = image;
      }
      const duplicate = randomImages.find(
        imageObject => imageObject.src === image,
      );
      if (duplicate || hasAlreadyTypo) {
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
        {this.state.showInfo ? (
          <View style={styles.infoContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => this.setState({showInfo: false})}>
              <Image
                source={require('./res/buttons/GAIA-ORACLE_Interface-04.png')}
                style={styles.optionImage}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>
                WHAT IS GAIA?{'\n'}
                GAIA IS THE GODDESS OF EARTH. IT IS ALSO THE NAME OF A THEORY BY
                LYNN MARGULIS AND JAMES LOVELOCK, THAT STATES THAT EARTH‘S
                BIOSPHERE REGULATES ITSELF BY THE COMBINED INTERACTION BETWEEN
                ALL LIVING THINGS. IT IS ONLY BECAUSE OF THIS DYNAMIC THAT LIFE
                ON EARTH HAS BEEN POSSIBLE FOR MILLIONS OF YEARS.{'\n'}
                MAYBE UNTIL NOW.{'\n'}
                {'\n'}
                THE ANTHROPOCENE, THE AGE OF MAN, HAS SHAPED THE WORLD, BROKEN
                THE CIRCLE OF REGENERATION AND IS DESTROYING THE GROUND WE LIVE
                ON.{'\n'}
                HOW CAN WE OVERCOME THIS AGE?{'\n'}
                {'\n'}
                THE GAIA ORACLE WAS CREATED TO HELP THINK OF WAYS TO ENTER A
                BETTER FUTURE FOR OUR PLANET.{'\n'}
                {'\n'}
                GAIA ORACLE WAS CREATED BY BERLIN BASED ILLUSTRATOR ANTON OHLOW
                BASED ON HIS MASTER THESIS „GAIA ISOTYPES“ IN COLLABORATION WITH
                LOUIS OHLOW.{'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                {'\n'}
                www.antonohlow.de{' '}
              </Text>
            </View>
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => this.setState({showInfo: true})}>
              <Image
                source={require('./res/buttons/GAIA-ORACLE_Interface-05.png')}
                style={styles.optionImage}
              />
            </TouchableOpacity>
            <View style={styles.oracleContainer}>
              <Oracle loading={false} images={images} />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.randomImage();
              }}>
              <Text style={styles.buttonTitle}> tell me the future </Text>
            </TouchableOpacity>
          </>
        )}
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
    top: '20%',
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
    height: '60%',
    aspectRatio: 0.6,
    alignSelf: 'center',
    justifyContent: 'center',
    top: '15%',
  },
  imageButton: {
    height: 50,
    width: 50,
    alignSelf: 'flex-end',
    top: 50,
    right: 50,
  },
  optionImage: {
    resizeMode: 'contain',
    height: 70,
    width: 70,
  },
  backButton: {
    height: 50,
    width: 50,
    alignSelf: 'flex-start',
    left: 20,
  },
  textContainer: {
    height: '100%',
    width: '80%',
    alignSelf: 'center',
    top: '5%',
  },
  infoContainer: {
    justifyContent: 'center',
    top: '10%',
  },
  textStyle: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
});
