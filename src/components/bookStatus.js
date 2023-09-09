import React from 'react';
import PropTypes from 'prop-types';

export default function BookStatus(props) {
  const {
    percentage, chapterNumber, progressBar,
  } = props;

  return (
    <>
      <div className="progress">
        <div className="progress-container">
          <div className={progressBar} />
        </div>
        <div className="percent">
          <div className="percentages">
            {percentage}
          </div>
          <li className="completed">Completed</li>
        </div>
      </div>
      <hr className="vertical-line" />
      <div className="chapter">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="chapter-number">{chapterNumber}</p>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </>
  );
}

BookStatus.propTypes = {
  percentage: PropTypes.string.isRequired,
  chapterNumber: PropTypes.string.isRequired,
  progressBar: PropTypes.string.isRequired,
};
