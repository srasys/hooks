import React from "react";

import Final from "./useContext/final/1-useContext-basics";

import { UserContextProvider } from "./context/userContext";

import { MainDataContextProvider } from "./context/mainDataContext";
function App() {
  return (
    <MainDataContextProvider>
      <UserContextProvider>
        <Final />
      </UserContextProvider>
    </MainDataContextProvider>
  );
}

export default App;
