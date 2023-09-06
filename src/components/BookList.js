import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { removeBook } from '../redux/books/bookSlice';

export default function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

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
