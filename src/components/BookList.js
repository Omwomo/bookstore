import React from 'react';
import Book from './Book';

export default function BookList() {
  const books = [
    { title: 'Mastery', author: 'Robert Green', id: 0 },
    { title: 'Laws of Nature', author: 'Jordan Peterson', id: 1 },
    { title: 'Emotional Intelligence', author: 'Daniel Goleman', id: 2 },
    { title: 'Rational Male', author: 'Rollo Tomasi', id: 3 },
  ];

  return (
    <div className="book-lists">
      <ul className="books">
        { books.map((book) => (
          <Book title={book.title} author={book.author} key={book.id} />
        ))}
      </ul>
    </div>
  );
}
