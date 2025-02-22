const ClockTime = () => {
  const time = new Date();

  return (
    <div>
      Current Time is {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </div>
  );
};

export default ClockTime;
