import React, { useState, createContext } from "react";

export const AttDataContext = createContext();

export const AttDataContextProvider = (props) => {
  const [attData, setAttData] = useState([]);

  const addAttData = (val) => {
    setAttData([...attData, val]);
  };

  return (
    <AttDataContext.Provider
      value={{
        attData,
        setAttData,
        addAttData,
      }}
    >
      {props.children}
    </AttDataContext.Provider>
  );
};
