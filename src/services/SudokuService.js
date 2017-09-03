const getSubgridPosition = position => Math.floor(position / 3);
const getSubgridIndex = (x, y) => (getSubgridPosition(x) * 3) + getSubgridPosition(y);
const extractColumnsAndSubgrids = (grid) => {
  const columns = [];
  const subgrids = [];
  grid.forEach((row) => {
    row.forEach((element) => {
      const data = { ...element };
      const subgridIndex = getSubgridIndex(element.x, element.y);
      if (!Array.isArray(columns[element.y])) {
        columns[element.y] = [];
      }
      if (!Array.isArray(subgrids[subgridIndex])) {
        subgrids[subgridIndex] = [];
      }
      columns[element.y].push(data);
      subgrids[subgridIndex].push(data);
    });
  });
  return { columns, subgrids };
};

const getDuplicatedValues = function getDuplicatedValues(array) {
  const duplicateValue = {};
  let previous = { value: 0 };
  array.slice().sort((a, b) => a.value > b.value).forEach((current) => {
    if (Number(current.value) !== 0 && current.value === previous.value) {
      Object.assign(duplicateValue, { [`${current.x}-${current.y}`]: current });
      Object.assign(duplicateValue, { [`${previous.x}-${previous.y}`]: previous });
    }
    previous = current;
  });
  return duplicateValue;
};

const SudokuService = {
  getVoidGrid(size = 9, value = 0) {
    const grid = [...Array(size)];
    return grid.map((v, x) => {
      const row = [...Array(size)];
      const disabled = false;
      return row.map((val, y) =>
        ({ value: 0, disabled, status: this.getStatusFromValue(value), x, y }));
    });
  },
  getDuplication(grid) {
    const duplicateValue = {};
    const { columns, subgrids } = extractColumnsAndSubgrids(grid);
    [grid, columns, subgrids].forEach((blocks) => {
      blocks.forEach((block) => {
        Object.assign(duplicateValue, getDuplicatedValues(block));
      });
    });
    return duplicateValue;
  },
  getStatusFromValue(val) {
    if (val === 0) {
      return 'default';
    }

    return 'define';
  },
};

export default SudokuService;
