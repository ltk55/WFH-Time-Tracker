import React from "react";
import AddAttData from "../components/AddAttData";
import Header from "../components/Header";
import AttDataList from "../components/AttDataList";
import MonthFilter from "../components/MonthFilter";

const home = () => {
  return (
    <div>
      <Header />
      <AddAttData />
      <MonthFilter />
      <AttDataList />
    </div>
  );
};

export default home;
