import React from "react";
import { RouterCustom } from "./route";
import { Initialization } from "./components/Initialization";

const App = () => {
  return (
    <div className="App">
      <Initialization />
      <RouterCustom />
    </div>
  );
};

export default App;
