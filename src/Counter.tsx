import React, { useState, useCallback } from "react";
import useInterval from "./useInterval";

function Counter() {
  const [count, setCount] = useState(0);
  const [interval, setInterval] = useState(1000);
  const incrementCount = useCallback(() => setCount(count => count + 1), []);

  useInterval(incrementCount, interval);

  return (
    <>
      <h2 className="property">{count}</h2>
      <input
        type="number"
        value={interval}
        onChange={e => setInterval(Number(e.target.value))}
      />
    </>
  );
}

export default Counter;
