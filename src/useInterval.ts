import * as React from "react";

function useInterval(callback: Callback, interval: number) {
  const callbackRef = React.useRef(callback);

  callbackRef.current = callback;

  React.useEffect(
    () => {
      const tick = () => callbackRef.current();
      const id = setInterval(tick, interval);
      return () => clearInterval(id);
    },
    [interval]
  );
}

export type Callback = (...args: any) => void;
export default useInterval;
