import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState("");
  const formatDate = (date) => {
    const h = `0${date.getHours()}`.slice(-2);
    const m = `0${date.getMinutes()}`.slice(-2);
    const s = `0${date.getSeconds()}`.slice(-2);
    return `${h}:${m}:${s}`;
  };
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = formatDate(now);
      setTime(newTimeString);
    }, 1000);
    return () => {
      console.log("cleanup");
      clearInterval(clockInterval);
    };
  }, []);
  console.log("render")
  return <div>{time}</div>;
}

export default Clock;
