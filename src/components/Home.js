import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Home = () => {
  const navigate = useNavigate();

  const data = useAuth();

  console.log(data);

  const navigateToSuccess = () => {
    navigate("/success");
  };
  return (
    <div>
      <h1>Home</h1>

      <button onClick={navigateToSuccess}>Submit Form</button>
    </div>
  );
};
export default Home;
