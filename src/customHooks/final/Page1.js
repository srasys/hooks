import React, { useState, useEffect } from "react";
import useTitlteCount from "./useTitleCount";

const Page2 = () => {
  const [count, setCount] = useState(0);

  useTitlteCount(count);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>count - {count}</button>
    </div>
  );
};

export default Page2;
