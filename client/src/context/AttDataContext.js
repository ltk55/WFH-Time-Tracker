import React, { useState, createContext } from "react";

export const AttDataContext = createContext();

export const AttDataContextProvider = (props) => {
  const getCurrMonth = new Date().getMonth() + 1;
  const getCurrYear = new Date().getFullYear();

  const [attData, setAttData] = useState([]);
  const [month, setMonth] = useState(getCurrMonth);
  const [year, setYear] = useState(getCurrYear);
  const [mthlyWkHr, setMthlyWkHr] = useState("160");

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
        mthlyWkHr,
        setMthlyWkHr,
        year,
        setYear,
      }}
    >
      {props.children}
    </AttDataContext.Provider>
  );
};
