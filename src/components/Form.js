import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

export default function Form() {
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      id: 'item4',
      title: 'Emotional Intelligence',
      author: 'Daniel Goleman',
      category: 'Self-help',
    };
    dispatch(addBook(newBook));
  };

  return (
    <form className="form">
      <input type="text" placeholder="book title" className="title-input" />
      <select className="author" name="author">
        <option value="robert-green">Robert Greene</option>
        <option value="jordan">Jordan Peterson</option>
        <option value="daniel">Daniel Goleman</option>
        <option value="niccolo">Niccolo Machievelli</option>
      </select>
      <button type="button" onClick={handleAddBook}>ADD BOOK</button>
    </form>
  );
}
