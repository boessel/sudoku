import React from 'react';
import PropTypes from 'prop-types';
import './Element.css';

const Element = ({ value, disabled, status, onChange, x, y }) => {
  this.onChange = onChange.bind(this);
  this.value = value === 0 ? '' : value;
  if (disabled) {
    return <div className={`sudoku_element ${status} disabled`} value={this.value} />;
  }
  return <input className={`sudoku_element ${status}`} onChange={onChange} value={this.value} placeholder={x + '-' + y} />;
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
