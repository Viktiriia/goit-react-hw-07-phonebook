import { configureStore } from '@reduxjs/toolkit';
import { newReducers } from './asyncRedux/contactReducers'; 
import { filterReducer } from './filtersSlice';
export const store = configureStore({
  reducer: {
    contacts:  newReducers ,
    filter: filterReducer,
  },
});