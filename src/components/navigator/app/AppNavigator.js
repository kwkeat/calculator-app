import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Initial from 'containers/Initial';
import CalculatorScreen from 'containers/CalculatorScreen';

const routeConfiguration = {
  Initial: { screen: Initial },
  CalculatorScreen: { screen: CalculatorScreen },
};

const AppNavigator = createSwitchNavigator(routeConfiguration);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
