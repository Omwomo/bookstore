import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks, removeBookAsync } from '../redux/books/bookSlice';

export default function BookList() {
  const booksById = useSelector((state) => state.books.booksById);
  const books = Object.values(booksById).flat();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div className="book-lists">
      <ul className="books">
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            category={book.category}
            key={book.itemId}
            onRemove={() => handleRemoveBook(book.itemId)}
          />
        ))}
      </ul>
      <Form />
    </div>
  );
}
