import React, { useEffect, useRef, useState } from "react";

const Index = () => {
  const [firstName, setFirstName] = useState("");

  const inputDom = useRef("");

  useEffect(() => {
    console.log(inputDom);
  });

  const focus=()=>{
    inputDom.current.focus()
  }
  return (
    <div>
      <input
        ref={inputDom}
        type={"text"}
        name="firstname"
        id="firstname"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h5>{firstName}</h5>
      <button onClick={focus}>focus</button>
    </div>
  );
};

export default Index;
