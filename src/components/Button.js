import React from 'react';

const Button = ({ action, value }) => {

  return (
    <div className="text-center">
    <button
      className="same-width btn btn-primary"
      onClick={action}> {value}
    </button>
    </div>
  )
};

export default Button;
