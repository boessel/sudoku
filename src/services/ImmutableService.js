const ImmutableService = {
  updateObjectInArray(array, newValues, index) {
    return [
      ...array.slice(0, index),
      Object.assign({}, array[index], newValues),
      ...array.slice(index + 1),
    ];
  },
  getOneDigitInteger(val) {
    const output = val.length > 1 ? Number(val[val.length - 1]) : Number(val);
    return Number.isNaN(output) ? 0 : output;
  },
  forEach(obj, callback) {
    Object.keys(obj).forEach((key) => {
      callback(obj[key], key);
    });
  },
};

export default ImmutableService;
