import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks, removeBookAsync } from '../redux/books/bookSlice';

export default function BookList() {
  const booksById = useSelector((state) => state.books.booksById);
  const books = Object.values(booksById).flat();
  const dispatch = useDispatch();

  const [bookStatus, setBookStatus] = useState([
    {
      key: '1',
      progressBar: 'prog',
      percentage: '100%',
      chapterNumber: 'Chapter 17',
    },
    {
      key: '2',
      progressBar: 'book2-progress prog',
      percentage: '75%',
      chapterNumber: 'Chapter 3',
    },
    {
      key: '3',
      progressBar: 'book3-progress prog',
      percentage: '50%',
      chapterNumber: 'Chapter 1',
    },
    {
      key: '4',
      progressBar: 'book4-progress prog',
      percentage: '25%',
      chapterNumber: 'Chapter 3',
    },
    {
      key: '5',
      progressBar: 'book5-progress prog',
      percentage: '0%',
      chapterNumber: 'Chapter 1',
    },
    {
      key: '6',
      progressBar: 'book1-progress prog',
      percentage: '100%',
      chapterNumber: 'Chapter 17',
    },
    {
      key: '7',
      progressBar: 'book2-progress prog',
      percentage: '75%',
      chapterNumber: 'Chapter 3',
    },
    {
      key: '8',
      progressBar: 'book3-progress prog',
      percentage: '50%',
      chapterNumber: 'Chapter 1',
    },
    {
      key: '9',
      progressBar: 'book4-progress prog',
      percentage: '25%',
      chapterNumber: 'Chapter 3',
    },
    {
      key: '10',
      progressBar: 'book5-progress prog',
      percentage: '0%',
      chapterNumber: 'Chapter 1',
    },
    {
      key: '11',
      progressBar: 'book1-progress prog',
      percentage: '100%',
      chapterNumber: 'Chapter 17',
    },
    {
      key: '12',
      progressBar: 'book2-progress prog',
      percentage: '75%',
      chapterNumber: 'Chapter 3',
    },
    {
      key: '13',
      progressBar: 'book3-progress prog',
      percentage: '50%',
      chapterNumber: 'Chapter 1',
    },
    {
      key: '14',
      progressBar: 'book4-progress prog',
      percentage: '25%',
      chapterNumber: 'Chapter 3',
    },
    {
      key: '15',
      progressBar: 'book5-progress prog',
      percentage: '0%',
      chapterNumber: 'Chapter 1',
    },
  ]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <>
      <div className="books">
        {books.map((book, index) => (
          <Book
            title={book.title}
            author={book.author}
            category={book.category}
            key={book.itemId}
            onRemove={() => handleRemoveBook(book.itemId)}
            status={bookStatus[index]}
          />
        ))}
      </div>
      <hr className="line" />
      <Form setBookStatus={setBookStatus} />
    </>
  );
}
