import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Colors from 'themes/colors';
import Actions from 'actions';
import Button from 'common/Button';
import { normalize } from 'utils/size';

const buttonsData = [
  {
    buttonText: 'AC',
    type: 'operation',
  },
  {
    iconName: 'plus-minus',
    type: 'operation',
  },
  {
    iconName: 'percent',
    type: 'operation',
  },
  {
    iconName: 'division',
    type: 'operator',
  },
  {
    buttonText: '7',
    type: 'number',
  },
  {
    buttonText: '8',
    type: 'number',
  },
  {
    buttonText: '9',
    type: 'number',
  },
  {
    iconName: 'close',
    type: 'operator',
  },
  {
    buttonText: '4',
    type: 'number',
  },
  {
    buttonText: '5',
    type: 'number',
  },
  {
    buttonText: '6',
    type: 'number',
  },
  {
    iconName: 'minus',
    type: 'operator',
  },
  {
    buttonText: '1',
    type: 'number',
  },
  {
    buttonText: '2',
    type: 'number',
  },
  {
    buttonText: '3',
    type: 'number',
  },
  {
    iconName: 'plus',
    type: 'operator',
  },
  {
    buttonText: '0',
    type: 'number',
  },
  {
    buttonText: '.',
    type: 'number',
  },
  {
    iconName: 'equal',
    type: 'operator',
  },
];

const CalculatorScreen = () => {
  const expression = useSelector(state => state.COMMON.compute.expression);
  const dispatch = useDispatch();

  const handleButtonPress = (value) => {
    switch (value) {
      case 'plus':
        if (expression.charAt(0) !== '0' && !isNaN(Number(expression.slice(-1)))) {
          dispatch(Actions.setExpression('+'));
        }
        break;
      case 'minus':
        if (expression.charAt(0) !== '0' && !isNaN(Number(expression.slice(-1)))) {
          dispatch(Actions.setExpression('-'));
        }
        break;
      case 'close':
        if (expression.charAt(0) !== '0' && !isNaN(Number(expression.slice(-1)))) {
          dispatch(Actions.setExpression('*'));
        }
        break;
      case 'division':
        if (expression.charAt(0) !== '0' && !isNaN(Number(expression.slice(-1)))) {
          dispatch(Actions.setExpression('/'));
        }
        break;
      case 'percent':
        if (expression.charAt(0) !== '0' && !isNaN(Number(expression.slice(-1)))) {
          dispatch(Actions.setExpression('%'));
        }
        break;
      case 'equal':
        dispatch(Actions.computeExpression(expression));
        break;
      case 'AC':
        dispatch(Actions.clearExpression());
        break;
      case 'plus-minus':
        dispatch(Actions.computeExpression(`-(${expression})`));
        break;
      default:
        dispatch(Actions.setExpression(value));
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.contentContainer}>
        <TextInput
          value={expression}
          style={styles.textInput}
        />
        <FlatList
          columnWrapperStyle={styles.flatlist}
          numColumns={4}
          data={buttonsData}
          extraData={expression}
          keyExtractor={item => item.buttonText || item.iconName}
          renderItem={({ item }) => {
            const value = item.buttonText || item.iconName;
            return (
              <Button
                style={item.buttonText === '0' && { width: normalize(170) }}
                buttonText={item.buttonText}
                iconName={item.iconName}
                type={item.type}
                onPress={() => handleButtonPress(value)}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  contentContainer: {
    position: 'absolute',
    bottom: normalize(30),
    width: '100%',
  },
  textInput: {
    backgroundColor: Colors.black,
    width: '100%',
    fontSize: normalize(50),
    color: Colors.white,
    textAlign: 'right',
    paddingHorizontal: normalize(10),
  },
  flatlist: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: normalize(10),
    backgroundColor: Colors.black,
  },
});

CalculatorScreen.propTypes = {
};

CalculatorScreen.defaultProps = {
  token: null,
};

export default CalculatorScreen;
