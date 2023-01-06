import React, { useState } from "react";

const Example4 = () => {
  const [firstname, setFirstName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();

//   const changeFirstName = (e) => {
//     console.log(e.target.value);
//     setFirstName(e.target.value);
//   };
//   const changeEmail = (e) => {
//     console.log(e.target.value);
//     setEmail(e.target.value);
//   };
//   const changePassword = (e) => {
//     console.log(e.target.value);
//     setPassword(e.target.value);
//   };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      firstname: firstname,
      email: email,
      passsword: password,
    };
    console.log(userObj);
  };
  const handleInputChanges = (e, name) => {
    console.log(e.target.value,name)
    if (name === "firstName") {
      setFirstName(e.target.value);
    } else if (name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  return (
    <div>
      <form>
        <div className="form-content">
          <input
            type="text"
            value={firstname}
            name="firstname"
            id="firstname"
            placeholder="enter your firstname"
            onChange={(e) => handleInputChanges(e, "firstName")}
          />
        </div>
        <div className="form-content">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="enter your email"
            onChange={(e) => handleInputChanges(e, "email")}
          />
        </div>
        <div className="form-content">
          <input
            type="password"
            name="paswword"
            id="password"
            value={password}
            placeholder="enter your password"
            onChange={(e) => handleInputChanges(e, "password")}
          />
        </div>
        <div className="form-button">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Example4;
