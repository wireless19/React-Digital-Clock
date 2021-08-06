import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  let currentDate = new Date().toDateString();

  const [time, setTime] = useState("TIME");

  function updateTime() {
    setTime(now);
  }
  setInterval(updateTime, 2000);

  return (
    <div className="container">
      <h6>{currentDate}</h6>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
