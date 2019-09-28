import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import * as Colors from 'themes/colors';
import { normalize } from 'utils/size';

class CalculatorScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to CalculatorScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white,
  },
});

CalculatorScreen.propTypes = {
};

CalculatorScreen.defaultProps = {
  token: null,
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen);
