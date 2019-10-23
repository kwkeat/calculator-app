import { combineReducers } from 'redux';
import rehydrate from './rehydrate';
import compute from './compute';

export default combineReducers({
  rehydrate,
  compute,
});
