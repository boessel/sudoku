const ImmutableService = {
  updateObjectInNestedArray(array, newValues, indexX, indexY) {
    const x = !!indexX ? indexX : newValues.x;
    const y = !!indexY ? indexY : newValues.y;
    return [
      ...array.slice(0, x),
      [
        ...array[x].slice(0, y),
        Object.assign({}, array[x][y], newValues),
        ...array[x].slice(y + 1),
      ],
      ...array.slice(x + 1),
    ];
  },
  getOneDigitInteger(val) {
    const output = val.length > 1 ? Number(val[val.length - 1]) : Number(val);
    return Number.isNaN(output) ? 0 : output;
  },
};

export default ImmutableService;
