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
    <div className="p-10">
      <form action="">
        <div className="flex space-x-2">
          <div className="flex-1">
            <input
              value={attDate}
              onChange={(e) => setAttDate(e.target.value)}
              type="text"
              className="form-control"
              placeholder="HH:MM"
            />
          </div>
          <div className="flex-1">
            <input
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              type="text"
              className="form-control"
              placeholder="HH:MM"
            />
          </div>
          <div className="flex-1">
            <input
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              type="text"
              className="form-control"
              placeholder="HH:MM"
            />
          </div>
          <div className="flex-1">
            <input
              value={lunchMin}
              onChange={(e) => setLunchMin(e.target.value)}
              type="text"
              className="form-control"
              placeholder="MM"
            />
          </div>
          <button
            onClick={handleSubmit}
            class="text-gray-400 hover:text-gray-100 ml-2"
          >
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAttData;
