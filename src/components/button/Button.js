import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRight } from 'react-icons/fi'; // Import right arrow icon
import './button.css';

const Button = ({ label, onClick, type = 'button', size = 'medium', color = 'primary', disabled = false, icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${size} btn-${color}`}
      disabled={disabled}
    >
      <span>{label}</span>
      {icon && <span className="btn-icon">{icon}</span>} {/* Render the icon if provided */}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  icon: PropTypes.element, // Accepting an icon element as a prop
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  size: 'medium',
  disabled: false,
  icon: <FiArrowRight />, // Set a default icon (right arrow)
};

export default Button;
