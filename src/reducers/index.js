import { combineReducers } from 'redux';
import sudoku from './sudoku';

const SudokuApp = combineReducers({
  sudoku,
});

export default SudokuApp;
