import Actions from 'actions';
import { calculate } from 'utils/calculation';

export const getDefaultState = () => ({ expression: '0' });

function compute(state, action) {
  if (typeof state === 'undefined') {
    return getDefaultState();
  }
  switch (action.type) {
    case Actions.SET_EXPRESSION:
      return {
        ...state,
        expression: state.expression.charAt(0) !== '0' ? state.expression + action.expression : action.expression,
      };
    case Actions.COMPUTE_EXPRESSION:
      return {
        ...state,
        expression: calculate(action.expression),
      };
    case Actions.CLEAR_EXPRESSION:
      return {
        ...state,
        expression: '0',
      };
    default:
      return state;
  }
}

export default compute;
