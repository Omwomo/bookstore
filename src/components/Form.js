import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addBookAsync, fetchBooks } from '../redux/books/bookSlice';

const generateUniqueID = () => {
  const timestamp = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${timestamp},${randomNumber}`;
};

export default function Form({ setBookStatus }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleAddBook = async () => {
    const newBook = {
      item_id: generateUniqueID(),
      title,
      author,
      category,
    };

    await dispatch(addBookAsync(newBook));

    setTitle('');
    setAuthor('');

    setBookStatus((prevStatus) => [
      ...prevStatus,
      {
        key: newBook.item_id,
        progressBar: 'book1-progress',
        percentage: '0%',
        chapterNumber: 'Chapter 1',
      },
    ]);
    dispatch(fetchBooks());
  };

  return (
    <form className="form">
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        placeholder="book title"
        className="title-input inputs"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        className="author inputs"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select
        className="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="FICTION">FICTION</option>
        <option value="ACTION">ACTION</option>
        <option value="SELF HELP">SELF HELP</option>
        <option value="REALITY">REALITY</option>
        <option value="FICTION">BIOGRAPHY</option>
        <option value="ACTION">POETRY</option>
        <option value="SELF HELP">CLASSICS</option>
        <option value="REALITY">MYSTERY</option>
      </select>
      <button type="button" className="add-book" onClick={handleAddBook}>ADD BOOK</button>
    </form>
  );
}

Form.propTypes = {
  setBookStatus: PropTypes.func.isRequired,
};
