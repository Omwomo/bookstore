import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    book: bookSlice,
    categories: categoriesSlice,
  },
});

export default store;
