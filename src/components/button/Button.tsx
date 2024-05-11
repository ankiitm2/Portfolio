import React from 'react';
import './style.css';

interface ButtonProps {
  text: string;
  onClick: () => void ; 
}

const ButtonComp: React.FC<ButtonProps> = ({ text, onClick }) => {

  return (
    <button onClick={onClick}>{text}</button>
  );
};

export default ButtonComp;
