import React from 'react';
import PropTypes from 'prop-types';
import SudokuElement from './Element.component';
import './Line.css';

const SudokuLine = ({ line }) => (
  <div className="sudoku_line">
    { line.map((element, index) => <SudokuElement {...element} key={index} />) }
  </div>
);

SudokuLine.propTypes = {
  line: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    status: PropTypes.string,
    disabled: PropTypes.boolean,
  })).isRequired,
};

export default SudokuLine;
