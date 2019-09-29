import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from 'themes/colors';
import { normalize } from 'utils/size';

const Button = ({
  onPress, buttonText, style, backgroundColor, textStyle,
}) => (
  <TouchableOpacity style={[styles.container, style, { backgroundColor }]} onPress={onPress}>
    <Text style={[styles.text, { color: backgroundColor === Colors.red ? Colors.white : Colors.black }, textStyle]}>{buttonText}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: Colors.maroon,
    borderWidth: 1,
  },
  text: {
    fontSize: normalize(40),
    paddingVertical: normalize(10),
    textAlign: 'center',
    fontWeight: '400',
  },
});

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  style: PropTypes.any,
  textStyle: PropTypes.any,
  backgroundColor: PropTypes.string,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
  backgroundColor: Colors.white,
};

export default Button;
