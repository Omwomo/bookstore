// In your BookList.js file

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks, removeBookAsync } from '../redux/books/bookSlice';

export default function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (id) => {
    dispatch(removeBookAsync(id));
  };

  if (books.length === 0) {
    return (
      <>
        <div>Loading... </div>
        <Form />
      </>
    );
  }

  return (
    <div className="book-lists">
      <ul className="books">
        { books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            key={book.id}
            onRemove={() => handleRemoveBook(book.id)}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
}
