const getSubgridPosition = position => Math.floor(position / 3);
const getSubgridIndex = (x, y) => (getSubgridPosition(x) * 3) + getSubgridPosition(y);

const getDuplicatedValues = function duplicationChecker(array) {
  const duplicateValues = {};
  let previous = { value: 0 };
  array.slice().sort((a, b) => a.value > b.value).forEach((current) => {
    if (Number(current.value) !== 0 && current.value === previous.value) {
      Object.assign(duplicateValues, { [`${current.x}-${current.y}`]: current });
      Object.assign(duplicateValues, { [`${previous.x}-${previous.y}`]: previous });
    }
    previous = current;
  });

  return duplicateValues;
};

const getDuplication = function getDuplication() {
  let previousDuplicateValues = {};
  return function getGridDuplication(grid) {
    const duplicateValues = {};
    const addToDuplicate = (i, filter) => (
      Object.assign(duplicateValues, getDuplicatedValues(grid.filter(filter)))
    );
    for (let i = 0; i < 9; i += 1) {
      addToDuplicate(i, element => element.x === i);
      addToDuplicate(i, element => element.y === i);
      addToDuplicate(i, element => getSubgridIndex(element.x, element.y) === i);
    }
    const output = { current: duplicateValues, previous: previousDuplicateValues };
    previousDuplicateValues = duplicateValues;

    return output;
  };
};

const SudokuService = {
  getVoidGrid(size = 9, value = 0) {
    const grid = [];
    for (let x = 0; x < size; x += 1) {
      for (let y = 0; y < size; y += 1) {
        grid.push({ value, x, y, status: 'void' });
      }
    }
    return grid;
  },
  getDuplication: getDuplication(),
  getStatusFromValue(val) {
    if (val === 0) {
      return 'default';
    }

    return 'define';
  },
};

export default SudokuService;
