import React from "react";

import Final from './useCallback/final/ParentComp'
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
