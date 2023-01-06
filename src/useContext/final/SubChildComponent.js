import React, { useContext } from "react";

import { UserContext } from "../../context/userContext";
import { MainDataContext } from "../../context/mainDataContext";
const SubChildComponent = () => {
  const data = useContext(UserContext);
  const data12 = useContext(MainDataContext);
  console.log(data, "datadata",data12);
  return (
    <div>
      <h1>subchildcontext</h1>
      <h1>{data.firstName}</h1>
      <h1>{data.astName}</h1>
      <h1>{data.email}</h1>
    </div>
  );
};

export default SubChildComponent;
