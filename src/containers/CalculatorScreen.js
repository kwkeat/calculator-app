import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import * as Colors from 'themes/colors';
import Button from 'common/Button';
import { normalize } from 'utils/size';
import { calculate } from 'utils/calculation';

class CalculatorScreen extends Component {
  state = {
    equation: '',
  };

  onButtonPress = (value) => {
    let { equation } = this.state;

    if (equation === '' && (value === '/' || value === '*')) {
      return Alert.alert(
        'Bad Expression',
        'Please start with a number!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
      );
    }

    // Replaces the last string if value and last character of equation are symbol
    if (isNaN(value) && isNaN(equation.substr(equation.length - 1))) {
      equation = equation.slice(0, -1) + value;
      return this.setState({ equation });
    }
    return this.setState(prevState => ({ equation: `${prevState.equation}${value}` }));
  };

  onClearPress = () => this.setState({ equation: '' })

  onEqualPress = () => {
    const { equation } = this.state;

    this.setState({ equation: calculate(equation) });
  }

  render() {
    const { equation } = this.state;

    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.screenContainer}>
          <TextInput
            value={equation}
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonContainer}>

          <View style={styles.row}>
            <Button
              buttonText="C"
              onPress={this.onClearPress}
            />
            <Button
              buttonText="0"
              onPress={() => this.onButtonPress('0')}
            />
            <Button
              buttonText="x"
              backgroundColor={Colors.red}
              onPress={() => this.onButtonPress('*')}
            />
            <Button
              buttonText="/"
              backgroundColor={Colors.red}
              onPress={() => this.onButtonPress('/')}
            />
          </View>
          <View style={styles.row}>
            <Button
              buttonText="7"
              onPress={() => this.onButtonPress('7')}
            />
            <Button
              buttonText="8"
              onPress={() => this.onButtonPress('8')}
            />
            <Button
              buttonText="9"
              onPress={() => this.onButtonPress('9')}
            />
            <Button
              buttonText="-"
              backgroundColor={Colors.red}
              onPress={() => this.onButtonPress('-')}
            />
          </View>
          <View style={styles.row}>
            <Button
              buttonText="4"
              onPress={() => this.onButtonPress('4')}
            />
            <Button
              buttonText="5"
              onPress={() => this.onButtonPress('5')}
            />
            <Button
              buttonText="6"
              onPress={() => this.onButtonPress('6')}
            />
            <Button
              buttonText="+"
              backgroundColor={Colors.red}
              onPress={() => this.onButtonPress('+')}
            />
          </View>
          <View style={styles.row}>
            <Button
              buttonText="1"
              onPress={() => this.onButtonPress('1')}
            />
            <Button
              buttonText="2"
              onPress={() => this.onButtonPress('2')}
            />
            <Button
              buttonText="3"
              onPress={() => this.onButtonPress('3')}
            />
            <Button
              buttonText="="
              backgroundColor={Colors.red}
              onPress={this.onEqualPress}
            />
          </View>
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  screenContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.brown,
  },
  textInput: {
    flex: 1,
    width: '100%',
    fontSize: normalize(50),
    color: Colors.white,
    textAlign: 'right',
    paddingHorizontal: normalize(10),
  },
  buttonContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  clearText: {
    fontWeight: '400',
    color: Colors.gray,
    paddingVertical: normalize(14),
  },
  clear: {
    flex: 1,
    height: normalize(30),
  },
});

CalculatorScreen.propTypes = {
};

CalculatorScreen.defaultProps = {
  token: null,
};

export default CalculatorScreen;
