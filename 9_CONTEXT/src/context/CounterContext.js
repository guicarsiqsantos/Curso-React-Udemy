import { createContext, useState } from "react";

import React from "react";

const CounterContext = () => {
  return <div>CounterContext</div>;
};

export default CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState();

  return (
    <CounterContext.Provider
      value={{ counter, setCounter }}
    ></CounterContext.Provider>
  );
};
