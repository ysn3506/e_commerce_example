import { configureStore } from '@reduxjs/toolkit';
import {itemsReducer} from './redux/items/reducer';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
