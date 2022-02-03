import React from 'react';

const Button = ({text, className}) => {
  return <div className={`bg-purple-blue text-grey-100 flex items-center justify-center px-6 py-3 rounded-4xl cursor-pointer ${className}`}>{text}</div>;
};

export default Button;
