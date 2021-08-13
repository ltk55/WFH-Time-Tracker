import React from "react";
import AddAttData from "../components/AddAttData";
import Header from "../components/Header";
import AttDataList from "../components/AttDataList";

const home = () => {
  return (
    <div>
      <Header />
      <AddAttData />
      <AttDataList />
    </div>
  );
};

export default home;
