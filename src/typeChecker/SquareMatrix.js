import Requirable from './Requirable';

const SquareMatrixPropType = function SquareMatrixChecker(size) {
  const checkArraySize = function checkArraySize(props, propName, componentName) {
    const checkSize = (array) => {
      if (!Array.isArray(array) || array.length !== size) {
        throw new Error(`Warning: Square Matrix "${propName}" should contain array of size "${size}" in "${componentName}"`);
      }
    };
    const array = props[propName];
    checkSize(array);
    array.forEach((line) => { checkSize(line); });
  };

  return Requirable(checkArraySize);
};

export default SquareMatrixPropType;
