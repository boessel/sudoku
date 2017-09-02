import React from 'react';
import SudokuGrid from './component/sudoku/Grid.component';
import SudokuService from './SudokuService';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <h1>Sudoku resolver</h1>
    </div>
    <div className="App-intro">
      <h2>Make your grid</h2>
      <SudokuGrid grid={SudokuService.getVoidGrid()} />
    </div>
  </div>
);

export default App;
