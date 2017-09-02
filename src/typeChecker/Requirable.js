const Requirable = function Requirable(propTypes) {
  const requirablePropTypes = propTypes;
  requirablePropTypes.isRequired = function addRequired(props, propName, componentName, ...args) {
    if (props[propName] === undefined) {
      throw new Error(`proprerty ${propName} from ${componentName} is Required`);
    }

    return requirablePropTypes(props, propName, componentName, ...args);
  };

  return requirablePropTypes;
};

export default Requirable;
