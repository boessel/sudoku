import React from 'react';
import PropTypes from 'prop-types';
import './Element.css';

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = props.onChange.bind(this);
    this.element = { x: props.x, y: props.y, status: props.status };
  }

  render() {
    const classes = `sudoku_element ${this.props.status}`;
    if (this.props.status === 'disabled') {
      return <div className={`${classes} disabled`} value={this.props.value} />;
    }
    return (<input
      className={classes}
      onChange={this.onChange}
      value={this.props.value}
      placeholder={`${this.props.x}-${this.props.y}`}
    />);
  }
}

Element.defaultProps = {
  disabled: false,
  status: 'default',
  onChange: () => {},
};

Element.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  status: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

export default Element;
