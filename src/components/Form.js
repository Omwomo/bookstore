import React from 'react';

export default function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="book title" className="title-input" />
      <select className="author" name="author">
        <option value="robert-green">Robert Greene</option>
        <option value="jordan">Jordan Peterson</option>
        <option value="daniel">Daniel Goleman</option>
        <option value="niccolo">Niccolo Machievelli</option>
      </select>
    </form>
  );
}
