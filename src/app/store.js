import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weathers/weatherSlice';
export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
});
