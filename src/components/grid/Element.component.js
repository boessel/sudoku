import React from 'react';
import PropTypes from 'prop-types';
import './Element.css';

const Element = ({ value, disabled, status, onChange }) => {
  this.onChange = onChange.bind(this);
  const outputValue = value === 0 ? '' : value;
  if (disabled) {
    return <div className={`sudoku_element ${status} disabled`} value={outputValue} />;
  }
  return <input className={`sudoku_element ${status}`} onChange={onChange} value={outputValue} />;
};

Element.defaultProps = {
  disabled: false,
  status: 'default',
  onChange: () => {},
};

Element.propTypes = {
  value: PropTypes.number.isRequired,
  status: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Element;
