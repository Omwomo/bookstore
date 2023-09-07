import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/bookSlice';

export default function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    const newBook = {
      id: `item${Math.floor(Math.random() * 1000)}`,
      title,
      author,
      category: 'Self-help',
    };

    dispatch(addBookAsync(newBook));

    setTitle('');
    setAuthor('');
  };

  return (
    <form className="form">
      <input
        type="text"
        placeholder="book title"
        className="title-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        className="author"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="button" onClick={handleAddBook}>ADD BOOK</button>
    </form>
  );
}
