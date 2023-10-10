import React from 'react';
import "./button.css"

const Button = ({ text, onClick, style }) => {
  return (
    <button className='button-container' onClick={onClick} style={style}>{text}</button>
  );
};

export default Button;