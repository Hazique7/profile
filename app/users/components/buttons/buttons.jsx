"use client";  // Add this line at the very top

import React from 'react';
import './buttons.css';
const DynamicButton = ({
  label = 'Click Me',
  onClick,
  color = '#0070f3',
  disabled = false,
  loading = false,
  style = {},
  ...props
}) => {
  const baseStyles = {
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    backgroundColor: color,
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    fontWeight: '600',
    transition: 'background-color 0.3s ease',
    ...style,
  };

  // const sizeStyles = {
  //   small: { padding: '6px 12px', fontSize: '0.8rem' },
  //   medium: { padding: '10px 20px', fontSize: '1rem' },
  //   large: { padding: '14px 28px', fontSize: '3rem' },
  // };

  return (
    <button className='button'
      onClick={!disabled && !loading ? onClick : undefined}
      style={{ ...baseStyles,  }}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? 'Loading...' : label}
    </button>
  );
};

export default DynamicButton;
