import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from 'themes/colors';
import { normalize } from 'utils/size';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Button = ({
  onPress, iconName, buttonText, style, type,
}) => {
  const isOperator = type === 'operator';
  const isOperation = type === 'operation';

  return (
    <TouchableOpacity style={[styles.container, style, { backgroundColor: Colors[type], borderColor: Colors[type] }]} onPress={onPress}>
      {iconName !== '' && <Icon name={iconName} size={normalize(50)} color={isOperator && Colors.white} />}
      {buttonText !== '' && <Text style={[styles.text, isOperation && { color: Colors.black }]}>{buttonText}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(80 / 2),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: normalize(5),
  },
  text: {
    fontSize: normalize(40),
    fontWeight: '400',
    color: Colors.white,
  },
});

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  type: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  style: PropTypes.any,
};

Button.defaultProps = {
  style: null,
  buttonText: '',
  iconName: '',
};

export default Button;
