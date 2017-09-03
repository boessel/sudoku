import SudokuService from '../services/SudokuService';
import ImmutableService from '../services/ImmutableService';

const sudokuReducer = (state = SudokuService.getVoidGrid(), action) => {
  switch (action.type) {
    case 'CHANGE_GRID_ELEMENT' : {
      const newValues = action.newValues;
      newValues.status = SudokuService.getStatusFromValue(newValues.value);
      let newState = ImmutableService.updateObjectInNestedArray(state, newValues);
      const duplicates = SudokuService.getDuplication(newState);
      Object.keys(duplicates).forEach((key) => {
        const duplicate = duplicates[key];
        duplicate.status = 'duplicate';
        console.log(duplicate);
        newState = ImmutableService.updateObjectInNestedArray(newState, duplicate);
      });

      return newState;
    }
    default:
      return state;
  }
};

export default sudokuReducer;
