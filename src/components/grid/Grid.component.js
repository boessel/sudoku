import React from 'react';
import PropTypes from 'prop-types';
import Line from './Line.component';
import SquareMatrixPropType from '../../typeChecker/SquareMatrix';

const Grid = ({ grid, onChange }) => {
  return (
    <div>
      {grid.map((line, index) => <Line key={index} line={line} onChange={onChange(index)} />)}
    </div>
  )
};

Grid.propTypes = {
  grid: SquareMatrixPropType(9).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Grid;
