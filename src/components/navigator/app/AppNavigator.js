import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import CalculatorScreen from 'containers/CalculatorScreen';

const routeConfiguration = {
  CalculatorScreen: { screen: CalculatorScreen },
};

const AppNavigator = createSwitchNavigator(routeConfiguration);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
