import { configureStore } from '@reduxjs/toolkit';
// Buraya reducer'larını import et
import rootReducer from './rootReducer'; // örnek

const store = configureStore({
  reducer: rootReducer,
});

export default store;
