import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./Auth";


const Login = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
 const navigate= useNavigate()
  return (
    <div>
      <h1> Login</h1>
      <label>username</label>
      <input
        name="name"
        placeholder="enter name"
        type={"text"}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login(name);
          navigate('/',{replace:true})
        }}
      >
        Login
      </button>
    </div>
  );
};
export default Login;
