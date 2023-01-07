import React, { useState, useMemo } from "react";

const Index = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

// const doubleNumber =slowFunction(number);
  const themeChange = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <div>
        <input
          type={"number"}
          name="number"
          id="number"
          value={number}
          onChange={(e) => {
            setNumber(Number(e.target.value));
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            setDark(!dark);
          }}
        >
          change theme
        </button>
      </div>
      <h2 style={themeChange}>the number is : {doubleNumber}</h2>
    </>
  );
};

const slowFunction = (number) => {
    for (let index = 0; index < 1000000000; index++) {}
    console.log("slow fun running");
    return number * 2;
  };
export default Index;
