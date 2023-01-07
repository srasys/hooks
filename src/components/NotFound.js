import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const navigateToSuccess = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>NotFound</h1>

      <button onClick={navigateToSuccess}>Back to Home</button>
    </div>
  );
};
export default NotFound;
