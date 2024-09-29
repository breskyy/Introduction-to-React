// zad 2 - prosty skrypt zwiększający liczbie o 1 na click

import React, { useState } from "react";

function ClickCounter() {
  const [value, setValue] = useState(0);

  const increment = () => { setValue(value + 1);
  };

  return (
    <div id="container">
      <button className="button" onClick={increment}>Kliknij se</button>
      <div>
        <p>Wartość:</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default ClickCounter;
