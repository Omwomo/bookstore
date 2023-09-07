import React from 'react';
import PropTypes from 'prop-types';

export default function Book(props) {
  const {
    // eslint-disable-next-line camelcase
    title, author, category, onRemove, item_id,
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
        <button type="button" className="remove-book" onClick={() => onRemove(item_id)}>REMOVE BOOK</button>
      </ul>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
