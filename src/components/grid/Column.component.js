import React from 'react';
import PropTypes from 'prop-types';
import Element from './Element.component';
import './Column.css';

const Column = ({ column, onChange }) => (
  <div className="sudoku_column">
    { column.map((element, index) =>
      <Element {...element} key={index} onChange={onChange(index)} />)}
  </div>
);

Column.propTypes = {
  column: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    status: PropTypes.string,
    disabled: PropTypes.boolean,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Column;
