import React from 'react';
import PropTypes from 'prop-types';
import "./button.css"

const Button = ({ label, onClick, type = 'button', size = 'medium', color = 'primary', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${size} btn-${color}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// PropTypes to define expected props and types
Button.propTypes = {
  label: PropTypes.string.isRequired, 
  onClick: PropTypes.func, // Function to call on clic
  type: PropTypes.oneOf(['button', 'submit', 'reset']), 
  size: PropTypes.oneOf(['small', 'medium', 'large']), 
  disabled: PropTypes.bool, // Whether the button is disabled
}

// Default props in case they are not provided
Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  size: 'medium',
  disabled: false,
};

export default Button;
