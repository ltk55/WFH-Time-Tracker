import React, { useContext } from "react";
import { AttDataContext } from "../context/AttDataContext";

const MonthFilter = () => {
  const { month, setMonth, attData } = useContext(AttDataContext);

  console.log(attData);

  // let totalWorkHour = attData.reduce(
  //   (re, el) => re + Math.round(Number(el.total_work_hour), 0)
  // );

  const totalWorkHour = (attData) => {
    return (
      Math.round(
        attData.reduce((re, el) => re + Number(el.total_work_hour), 0) * 100
      ) / 100
    );
  };

  return (
    <div className="row pb-3">
      <div className="col-md-3">
        <select
          className=" text-white p-1"
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
      </div>

      <div className="col-md-3 offset-md-6 text-white">
        <span className="px-1"> Monthly Total:</span>
        <span> {totalWorkHour(attData)}</span>
      </div>
    </div>
  );
};

export default MonthFilter;
