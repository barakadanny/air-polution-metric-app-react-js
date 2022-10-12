import { configureStore } from '@reduxjs/toolkit';
import placeReducer from './reducer/place';

const store = configureStore({
  reducer: {
    place: placeReducer,
  },
});

export default store;
