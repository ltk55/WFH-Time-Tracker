import React, { useContext } from "react";
import { AttDataContext } from "../context/AttDataContext";
import { useHistory } from "react-router-dom";

const MonthFilter = () => {
  const { mthlyWkHr, setMthlyWkHr } = useContext(AttDataContext);
  let history = useHistory();

  return (
    <div>
      <form action="" className="d-flex flex-column">
        <div className="mt-3">
          <label htmlFor="mthlyWkHr" className="text-white mb-2">
            Monthly Working Hour
          </label>
          <input
            value={mthlyWkHr}
            onChange={(e) => setMthlyWkHr(e.target.value)}
            id="mthlyWkHr"
            className="form-control"
            type="number"
            min="0"
            step="1"
          />
        </div>

        <button
          type="submit"
          onClick={() => history.push("/")}
          className="btn btn-primary mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default MonthFilter;
