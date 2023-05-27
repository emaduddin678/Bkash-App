import React from "react";

function Button({ text, ...rest }) {
  return (
    <div {...rest}>
      <button className="button" type="submit">
        {text}
      </button>
    </div>
  );
}

export default Button;
