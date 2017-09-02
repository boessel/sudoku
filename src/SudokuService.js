const SudokuService = () => {
  const generateArray = (size, value = 0) => {
    const array = new Array(size);
    return array.fill({
      value,
      disabled: false,
      status: 'blank',
    });
  };

  return {
    getVoidGrid: (size = 9) => generateArray(size).map(() => generateArray(size)),
  };
};

export default SudokuService();
