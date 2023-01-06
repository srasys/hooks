import React, { useState } from "react";

const Example = () => {
  const [showData, setShowData] = useState(false);

  const hideOrShowData =()=>{
    setShowData(!showData)
  }
  return (
    <div>
      <button onClick={hideOrShowData}>{!showData?'Show':'Hide'}</button>
      {showData && (
        <div className="content">kjsbfjksbjkdsbjkdsbjkdsbvjdsbvs</div>
      )}
    </div>
  );
};
export default Example;
