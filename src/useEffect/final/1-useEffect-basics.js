import React, { useEffect, useState } from "react";

const Index = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("i am coming from useeffect");
  }, []);

  const decreaseVl = () => {
    setState(state - 1);
  };
  const increaseVal = () => {
    setState(state + 1);
  };
  return (
    <div>
      <h1>hiihi</h1>
      <button onClick={decreaseVl}>-</button>
      <span>{state}</span>
      <button onClick={increaseVal}>-</button>
    </div>
  );
};
export default Index;
