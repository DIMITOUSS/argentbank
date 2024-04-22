import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './action/reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
