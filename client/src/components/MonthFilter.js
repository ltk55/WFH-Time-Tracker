import React, { useContext } from "react";
import { AttDataContext } from "../context/AttDataContext";

const MonthFilter = () => {
  const { month, setMonth } = useContext(AttDataContext);

  return (
    <div className="m-3 ">
      <div className="row">
        <select
          className="col-md-3 text-white p-1"
          onChange={(e) => setMonth(e.target.value)}
          value={month}
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December </option>
        </select>
        <div className="col-md-4 offset-md-4"> </div>
      </div>
    </div>
  );
};

export default MonthFilter;
