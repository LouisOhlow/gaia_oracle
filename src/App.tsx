import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';
import Oracle from './oracle';

export class App extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.oracleContainer}>
          <Oracle images={[{}]} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
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
    top: 170,
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
  },
});
