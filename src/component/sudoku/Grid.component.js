import React from 'react';
import SudokuLine from './Line.component';
import SquareMatrixPropType from '../../typeChecker/SquareMatrix';

const SudokuGrid = ({ grid }) => (
  <div>
    {grid.map((line, index) => <SudokuLine key={index} line={line} />)}
  </div>
);

SudokuGrid.propTypes = {
  grid: SquareMatrixPropType(9).isRequired
};

export default SudokuGrid;
