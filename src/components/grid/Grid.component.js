import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row.component';

const Grid = ({ grid, onChange }) => {
  const size = Math.sqrt(grid.length);
  const rows = [];
  const isElementX = i => element => element.x === i;
  for (let i = 0; i < size; i += 1) {
    rows.push(grid.filter(isElementX(i)));
  }
  return (<div>
    {rows.map((row, i) => <Row key={i} row={row} onChange={onChange} />)}
  </div>);
};

Grid.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    status: PropTypes.string,
    disabled: PropTypes.boolean,
    x: PropTypes.number,
    y: PropTypes.number,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Grid;
