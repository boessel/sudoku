import { connect } from 'react-redux';
import Grid from '../components/grid/Grid.component';

const mapStateToProps = function mapStateToProps({ sudoku }) {
  return {
    grid: sudoku,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChange: function line(x) {
      return function column(y) {
        return function element(e) {
          console.log(e, this);
          return dispatch({
            x,
            y,
            type: 'CHANGE_GRID_ELEMENT',
            newValues: {
              value: 0,
            },
          });
        };
      };
    },
  };
};

const SudokuGrid = connect(mapStateToProps, mapDispatchToProps)(Grid);

export default SudokuGrid;
