import React, { useEffect, useRef, useState } from "react";

const Index = () => {
  const [firstName, setFirstName] = useState("");

  const renderCount = useRef(1);

  useEffect(() => {
    console.log(renderCount.current)
  });

  return (
    <div>
      <input
        type={"text"}
        name="firstname"
        id="firstname"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h5>{firstName}</h5>
      <h4>{renderCount.current}</h4>
    </div>
  );
};

export default Index;
