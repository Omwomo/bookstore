import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync, fetchBooks } from '../redux/books/bookSlice';

const generateUniqueID = () => {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${timestamp},${randomNumber}`;
};

export default function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = async () => { // Make the function asynchronous
    const newBook = {
      item_id: generateUniqueID(),
      title,
      author,
      category: 'Self-help',
    };

    await dispatch(addBookAsync(newBook)); // Wait for addBookAsync to complete

    setTitle('');
    setAuthor('');

    dispatch(fetchBooks());
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
