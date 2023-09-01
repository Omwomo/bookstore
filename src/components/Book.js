import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

export default function Book(props) {
  const { title, author } = props;
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
        <button type="button" className="remove-book">REMOVE BOOK</button>
      </ul>
      <Form />
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
