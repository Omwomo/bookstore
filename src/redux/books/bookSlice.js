import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const newAppId = '8hRxdA2IX11EQZ7NF3Bf';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${baseURL}/apps/${newAppId}/books`);
    const booksWithItemId = Object.keys(response.data).reduce((acc, key) => {
      const itemId = key;
      const book = response.data[key][0];
      return {
        ...acc,
        [itemId]: { ...book, itemId },
      };
    }, {});
    return booksWithItemId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Async thunk for adding books
export const addBookAsync = createAsyncThunk('books/addBook', async (newBook, thunkAPI) => {
  try {
    const response = await axios.post(`${baseURL}/apps/${newAppId}/books`, newBook);
    return response.data[0];
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Async thunk for removing a book
export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId, thunkAPI) => {
  try {
    await axios.delete(`${baseURL}/apps/${newAppId}/books/${bookId}`);
    return bookId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const initialState = {
  isLoading: false,
  booksById: {},
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      delete state.booksById[bookId];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.booksById = action.payload;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        const newBook = action.payload;
        state.booksById[newBook.itemId] = [newBook];
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const bookId = action.payload;
        delete state.booksById[bookId];
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
