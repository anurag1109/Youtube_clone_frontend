import React from "react";

function Button({ buttonName }) {
  return (
    <div>
      <button
    
        className="px-4 py-1 my-2 bg-gray-200 rounded-lg"
      >
        {buttonName}
      </button>
    </div>
  );
}

export default Button;
