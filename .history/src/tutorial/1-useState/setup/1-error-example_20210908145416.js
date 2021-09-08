import React from 'react';

const ErrorExample = () => {
  const title = "Random";
  const handleClick = () => {};
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
