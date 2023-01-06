import React, { useEffect, useState } from "react";

const Index = () => {
  const [state, setState] = useState(0);

  const [pagewidth, setPageWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log("i am coming from useeffect");
  }, [state]);

  useEffect(() => {
    const resizeHandler = window.addEventListener("resize", () => {
      setPageWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  });

  const increaseVal = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h1>Learn useEffect</h1>
      <h1>{pagewidth}</h1>
      <span>{state}</span>
      <button onClick={increaseVal}>-</button>
    </div>
  );
};

export default Index;
