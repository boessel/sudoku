import React from 'react';
import PropTypes from 'prop-types';
import Element from './Element.component';
import './Line.css';

const Line = ({ line, onChange }) => (
  <div className="sudoku_line">
    { line.map((element, index) =>
      <Element {...element} key={index} onChange={onChange(index)} />)}
  </div>
);

Line.propTypes = {
  line: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    status: PropTypes.string,
    disabled: PropTypes.boolean,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Line;
