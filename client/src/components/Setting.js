import React, { useContext } from "react";
import { AttDataContext } from "../context/AttDataContext";
import { useHistory } from "react-router-dom";

const Setting = () => {
  const { mthlyWkHr, setMthlyWkHr, year, setYear } = useContext(AttDataContext);
  let history = useHistory();

  return (
    <div>
      <form action="" className="d-flex flex-column">
        <div className="mt-3">
          <label htmlFor="mthlyWkHr" className="text-white mb-1">
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

        <div className="mt-3">
          <label htmlFor="year" className="text-white mb-1">
            Year
          </label>
          <input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            id="year"
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
        <button
          type="button"
          onClick={() => history.push("/")}
          className="btn btn-warning mt-3"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Setting;
