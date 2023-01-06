import React from "react";

const initialState = {
  firstName: "hi",
  lastName: "chinna",
  email: "abc@gmail.com",
};
export const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
};
