import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

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

    dispatch(addBook(newBook));

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
      <select
        className="author"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      >
        <option value="robert-green">Robert Greene</option>
        <option value="jordan">Jordan Peterson</option>
        <option value="daniel">Daniel Goleman</option>
        <option value="niccolo">Niccolo Machievelli</option>
      </select>
      <button type="button" onClick={handleAddBook}>ADD BOOK</button>
    </form>
  );
}
