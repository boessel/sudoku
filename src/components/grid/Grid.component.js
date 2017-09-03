import React from 'react';
import PropTypes from 'prop-types';
import Column from './Column.component';
import SquareMatrixPropType from '../../typeChecker/SquareMatrix';

const Grid = ({ grid, onChange }) => (
  <div>
    {grid.map((column, index) => <Column key={index} column={column} onChange={onChange(index)} />)}
  </div>
);

Grid.propTypes = {
  grid: SquareMatrixPropType(9).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Grid;
