import React, { useContext } from "react";
import { AttDataContext } from "../context/AttDataContext";

const MonthFilter = () => {
  const { month, setMonth, attData, mthlyWkHr } = useContext(AttDataContext);

  const totalWorkHour = (attData) => {
    return (
      Math.round(
        attData.reduce((re, el) => re + Number(el.total_work_hour), 0) * 100
      ) / 100
    );
  };

  const pctCompleted = Math.floor((totalWorkHour(attData) / mthlyWkHr) * 100);

  return (
    <div className="row justify-content-between mb-4">
      <div className="col-3 mt-auto">
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

      <div className="col-3">
        <div className="text-white mb-3">
          <span className="px-1"> Monthly Total:</span>
          <span>
            {" "}
            {totalWorkHour(attData)} / {mthlyWkHr} hrs
          </span>
        </div>

        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: pctCompleted + "%",
            }}
            aria-label="monthly progress"
            aria-valuenow={pctCompleted}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {pctCompleted}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthFilter;
