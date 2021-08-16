import React, { useContext, useState } from "react";
import RestaurantFinder from "../api/AttDataFinder";
import { AttDataContext } from "../context/AttDataContext";

const AddAttData = () => {
  const { addAttData } = useContext(AttDataContext);
  const [attDate, setAttDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [lunchMin, setLunchMin] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await RestaurantFinder.post("/", {
        att_date: attDate,
        start_time: startTime,
        end_time: endTime,
        lunch_min: lunchMin,
      });

      addAttData(response.data.data.attdata);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form action="">
        <div className="row mb-5">
          <div className="col align-self-end">
            <label htmlFor="date" className="form-label text-light">
              Date
            </label>
            <input
              value={attDate}
              onChange={(e) => setAttDate(e.target.value)}
              type="text"
              className="form-control text-center"
              placeholder="YYYYMMDD"
            />
          </div>
          <div className="col align-self-end">
            <label htmlFor="start-time" className="form-label text-light">
              Start Time
            </label>
            <input
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              type="text"
              className="form-control text-center"
              placeholder="HH:MM"
            />
          </div>
          <div className="col align-self-end">
            <label htmlFor="end-time" className="form-label text-light">
              End Time
            </label>
            <input
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              type="text"
              className="form-control text-center"
              placeholder="HH:MM"
            />
          </div>
          <div className="col align-self-end">
            <label htmlFor="lunch-time" className="form-label text-light">
              Lunch Duration (min)
            </label>
            <input
              value={lunchMin}
              onChange={(e) => setLunchMin(e.target.value)}
              type="text"
              className="form-control text-center"
              placeholder="MM"
            />
          </div>
          <div className="col align-self-end">
            <button onClick={handleSubmit} className="btn btn-primary ">
              <span className="bg-primary">Submit</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddAttData;
