import { combineReducers } from 'redux';
// Örnek reducer importu
import exampleReducer from './exampleSlice';

const rootReducer = combineReducers({
  example: exampleReducer,
});

export default rootReducer;
