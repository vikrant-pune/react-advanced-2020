import React, { useState } from "react";

const ErrorExample = () => {
  let title = "Random";

  const [text, setText] = useState("Random Title");

  const handleClick = () => {
    title = "Hi Cuttie!";
    console.log(title);
    if (text != title) setText(title);
    else setText("BBye!");
  };

  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
