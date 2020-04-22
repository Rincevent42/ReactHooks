import React, { useState } from 'react';


function Counter () {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [countInitialValue, setCIV] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div>
      <input type='number' value={countInitialValue} onChange={(event) => setCIV(event.target.value)} />
      <p>Le compteur est  à : {count + parseInt(countInitialValue)} </p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
}

export default Counter;
