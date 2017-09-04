import SudokuService from '../services/SudokuService';
import ImmutableService from '../services/ImmutableService';

const getIndex = element => (element.x * 9) + element.y;
const changeElementsStatusInNewState = (elements, newStatus, state) => {
  let newState = [...state];
  ImmutableService.forEach(elements, (element) => {
    const newElement = Object.assign({}, element, { status: newStatus });
    newState = ImmutableService.updateObjectInArray(newState, newElement, getIndex(newElement));
  });

  return newState;
};

const sudokuReducer = (state = SudokuService.getVoidGrid(), { type, payload }) => {
  switch (type) {
    case 'CHANGE_GRID_ELEMENT' : {
      const newValues = payload.values;
      newValues.status = SudokuService.getStatusFromValue(newValues.value);
      let newState = ImmutableService.updateObjectInArray(
        state,
        newValues,
        getIndex(payload.element),
      );
      const duplicates = SudokuService.getDuplication(newState);
      newState = changeElementsStatusInNewState(duplicates.current, 'duplicate', newState);
      const fixedDuplicatesKeys = {};
      Object.keys(duplicates.previous).forEach((key) => {
        if (duplicates.current[key] === undefined) {
          fixedDuplicatesKeys[key] = newState[getIndex(duplicates.previous[key])];
        }
      });
      newState = changeElementsStatusInNewState(fixedDuplicatesKeys, 'define', newState);

      return newState;
    }
    default:
      return state;
  }
};

export default sudokuReducer;
