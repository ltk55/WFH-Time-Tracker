import React, { useContext } from "react";
import { AttDataContext } from "../context/AttDataContext";

const MonthFilter = () => {
  const { setMonth } = useContext(AttDataContext);

  return (
    <div>
      <div className="month">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => setMonth(e.target.value)}
          defaultValue="08"
        >
          <option>Open this select menu</option>
          <option value="1">January</option>
          <option value="2">Feb</option>
          <option value="3">Mar</option>
          <option value="4">Apr</option>
          <option value="5">May</option>
          <option value="6">Jun</option>
          <option value="7">Jul</option>
          <option value="8">Aug</option>
          <option value="9">Sep</option>
          <option value="10">Oct</option>
          <option value="11">Nov</option>
          <option value="12">Dec</option>
        </select>
      </div>
    </div>
  );
};

export default MonthFilter;
