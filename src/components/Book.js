import React from 'react';
import PropTypes from 'prop-types';
import BookStatus from './bookStatus';

export default function Book(props) {
  const {
    title, author, category, onRemove, status,
  } = props;

  return (
    <>
      <div className="book-panel">
        <ul className="books">
          <li className="book-category">
            {category}
          </li>
          <li className="book-title">
            {title}
          </li>
          <li className="book-author">
            {author}
          </li>
          <div className="action-buttons">
            <button type="button" className="comments button">Comments</button>
            <hr className="books-line" />
            <button type="button" className="remove-book button" onClick={onRemove}>REMOVE BOOK</button>
            <hr className="books-line" />
            <button type="button" className="edit button">Edit</button>
          </div>
        </ul>
        <BookStatus
          percentage={status.percentage}
          chapterNumber={status.chapterNumber}
          progressBar={status.progressBar}
        />
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  status: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
};
