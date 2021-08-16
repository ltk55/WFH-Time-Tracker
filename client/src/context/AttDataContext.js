import React, { useState, createContext } from "react";

export const AttDataContext = createContext();

export const AttDataContextProvider = (props) => {
  const getCurrMonth = new Date().getMonth() + 1;

  const [attData, setAttData] = useState([]);
  const [month, setMonth] = useState(getCurrMonth);

  const addAttData = (val) => {
    setAttData([...attData, val]);
  };

  return (
    <AttDataContext.Provider
      value={{
        attData,
        setAttData,
        addAttData,
        month,
        setMonth,
      }}
    >
      {props.children}
    </AttDataContext.Provider>
  );
};
