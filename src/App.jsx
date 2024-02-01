import React, { useState } from "react";
import UseStateExmaple from "./components/use-state/UseStateExmaple";
import UseStateWithComplexObject from "./components/use-state/UseStateWithComplexObject";
import UseEffectExample from "./components/use-effect/UseEffectExample";
import ComplexDetailsWithReducer from "./components/use-reducer/ComplexDetailsWithReducer";

const App = () => {
  return (
    <>
      {/* <UseStateExmaple /> */}
      {/* <UseStateWithComplexObject /> */}
      {/* <UseEffectExample /> */}
      <ComplexDetailsWithReducer />
    </>
  );
};

export default App;
