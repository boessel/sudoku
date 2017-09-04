import { connect } from 'react-redux';
import Grid from '../components/grid/Grid.component';
import ImmutableService from '../services/ImmutableService';

const mapStateToProps = function mapStateToProps({ sudoku }) {
  return {
    grid: sudoku,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChange(event) {
      const value = ImmutableService.getOneDigitInteger(event.target.value);
      return dispatch({
        type: 'CHANGE_GRID_ELEMENT',
        payload: {
          values: { value },
          element: { ...this.element },
        },
      });
    },
  };
};

const SudokuGrid = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default SudokuGrid;
