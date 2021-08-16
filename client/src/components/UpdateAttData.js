import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import AttDataFinder from "../api/AttDataFinder";

const UpdateAttData = () => {
  const { id } = useParams();
  let history = useHistory();
  const [attDate, setAttDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [lunchMin, setLunchMin] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AttDataFinder.get(`/${id}`);
        setAttDate(response.data.data.attdata.att_date);
        setStartTime(response.data.data.attdata.start_time);
        setEndTime(response.data.data.attdata.end_time);
        setLunchMin(response.data.data.attdata.lunch_min);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await AttDataFinder.put(`/${id}`, {
      att_date: attDate,
      start_time: startTime,
      end_time: endTime,
      lunch_min: lunchMin,
    });
    history.push("/");
  };

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="attDate">Date</label>
          <input
            value={attDate}
            onChange={(e) => setAttDate(e.target.value)}
            id="attDate"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="startTime">Start Time</label>
          <input
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            id="startTime"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="endTime">End Time</label>
          <input
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            id="endTIme"
            className="form-control"
            type="text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="lunchMin">Lunch Minute</label>
          <input
            value={lunchMin}
            onChange={(e) => setLunchMin(e.target.value)}
            id="lunchMin"
            className="form-control"
            type="number"
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateAttData;
