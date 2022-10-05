import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import cityReducer from "./reducer/actions";

const store = configureStore({
  reducer: {
    city: cityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(thunk),
});

export default store;
