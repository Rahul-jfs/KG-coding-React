import { useEffect, useState } from "react";

const ClockTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cancelled the interval");
    };
  }, []);

  return (
    <div>
      Current Time is {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </div>
  );
};

export default ClockTime;
