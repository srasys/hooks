import React, { useState } from "react";
function Index() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);

    setCount((prevCount)=>{
        return prevCount +1;
    })
    setCount((prevCount)=>{
        return prevCount +1;
    })
  };
  const decrementCount = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <button onClick={decrementCount} className="decrease">
        -
      </button>
      <span className="count">Count : {count}</span>
      <button onClick={incrementCount} className="increase">
        +
      </button>
    </div>
  );
}

export default Index;
