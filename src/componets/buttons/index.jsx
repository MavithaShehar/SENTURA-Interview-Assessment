import React from 'react';
import './styles.scss';

function Button({ onClick, name }) {
  return (
    <div className='butn'>
      <button onClick={onClick}>{name}</button>
    </div>
  );
}

export default Button;
