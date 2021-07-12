import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  enthusiasmLevel: number;
}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.oracleContainer}>

        </View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonTitle}> TELL ME THE FUTURE </Text>
          </TouchableOpacity>
      </View>
      );
    }
  };
export default App;

const styles = StyleSheet.create({
  button: {
    height: '8%',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRadius: 50,
    borderColor: 'black',
    borderWidth: 5,
    top: 200
  },
  container: {
    width: '100%',
    height: '100%',
    },
  buttonTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  oracleContainer: {
    backgroundColor: 'red',
    height: 500,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    top: 150,
  }
})
