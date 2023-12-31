import { configureStore, combineReducers } from "@reduxjs/toolkit";
import checkboxReducer from "./reducers/checkbox.reducer";

export type Fn = (arg: any) => void;

const rootReducer = combineReducers({
  checkbox: checkboxReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
