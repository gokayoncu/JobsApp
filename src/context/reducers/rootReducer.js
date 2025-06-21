import { combineReducers } from 'redux';
import slice from '../slice/slice';

const rootReducer = combineReducers({
  jobs: slice,
});

export default rootReducer;
