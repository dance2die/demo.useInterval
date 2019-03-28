import React, { useState, useCallback } from "react";
import moment from "moment";
import useInterval from "./useInterval";

function useCurrentTime(format: string = "hh:mm:ss a") {
  const [time, setTime] = useState(moment());
  const updateTime = () => setTime(moment());

  useInterval(updateTime, 1000);

  return time.format(format);
}

function Timer() {
  const time = useCurrentTime();

  return <div className="property">{time}</div>;
}

export default Timer;
