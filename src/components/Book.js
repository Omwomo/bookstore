import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const {
    title, author, category, onRemove,
  } = props;

  return (
    <>
      <ul className="Books">
        <li className="book-title">
          Title:
          {title}
        </li>
        <li className="book-author">
          Author:
          {author}
        </li>
        <li className="book-category">
          Category:
          {category}
        </li>
        <button type="button" className="remove-book" onClick={onRemove}>REMOVE BOOK</button>
      </ul>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
