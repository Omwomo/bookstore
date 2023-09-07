import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks, removeBook, removeBookAsync } from '../redux/books/bookSlice';

export default function BookList() {
  const booksById = useSelector((state) => state.books.booksById);
  const books = Object.values(booksById).map((arr) => arr[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (id) => {
    dispatch(removeBookAsync(id));
    dispatch(removeBook(id));
  };

  return (
    <div className="book-lists">
      <ul className="books">
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            category={book.category}
            key={book.item_id}
            onRemove={() => handleRemoveBook(book.item_id)}
            item_id={book.item_id}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
}
