import React from 'react';
import PropTypes from 'prop-types';
import Element from './Element.component';
import './Row.css';

const Column = ({ row, onChange }) => (
  <div className="sudoku_row">
    {row.map((element) => {
      const formattedElement = Object.assign({}, element, { value: element.value === 0 ? '' : element.value });
      return <Element {...formattedElement} key={`${element.x}-${element.y}`} onChange={onChange} />;
    })}
  </div>
);

Column.propTypes = {
  row: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    status: PropTypes.string,
    disabled: PropTypes.boolean,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Column;
