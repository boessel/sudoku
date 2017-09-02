import SudokuService from '../services/SudokuService';

const sudokuReducer = (state = SudokuService.getVoidGrid(), action) => {
  switch (action.type) {
    case 'CHANGE_GRID_ELEMENT' :
      return [
        ...state.slice(0, action.x),
        [
          ...state[action.x].slice(0, action.y),
          action.newValue,
          ...state[action.x].slice(action.y + 1),
        ],
        ...state.slice(action.x + 1),

      ];
    default:
      return state;
  }
};

export default sudokuReducer;
