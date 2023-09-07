import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const newAppId = 'PCjI6tTi8uL0vQkTGQFc';

// Async thunk for fetching book
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${baseURL}/apps/${newAppId}/books`);
    // console.log('API response:', response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Async thunk for adding books
export const addBookAsync = createAsyncThunk('books/addBook', async (newBook, thunkAPI) => {
  try {
    await axios.post(`${baseURL}/apps/${newAppId}/books`, newBook);
    return newBook;
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
  books: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books = [...state.books, action.payload];
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.id !== action.payload);
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
