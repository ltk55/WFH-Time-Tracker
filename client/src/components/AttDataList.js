import React, { useEffect, useContext } from "react";
import AttDataFinder from "../api/AttDataFinder";
import { AttDataContext } from "../context/AttDataContext";
import { useHistory } from "react-router-dom";
import moment from "moment";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const AttDataList = () => {
  const { attData, setAttData, month, year } = useContext(AttDataContext);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AttDataFinder.get("/"); // ("/") get the baseURL from AttDataFinder

        const filteredAttData = response.data.data.attdata.filter(
          (el) =>
            Number(el.att_date.substring(5, 7)) === Number(month) &&
            Number(el.att_date.substring(0, 4)) === Number(year)
        );

        const sortedResult = filteredAttData.sort((a, b) => {
          return new Date(b.att_date) - new Date(a.att_date);
        });

        setAttData(sortedResult);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [month, setAttData, year]);

  const handleDelete = async (id) => {
    try {
      await AttDataFinder.delete(`/${id}`);
      setAttData(
        attData.filter((el) => {
          return el.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    history.push(`/attdata/${id}/update`);
  };

  console.log(attData);

  return (
    <div className="table-responsive">
      {attData.length === 0 ? (
        <p className="text-white text-center p-3">No Data</p>
      ) : (
        <table className="table table-dark table-bordered" id="table-to-xls">
          <thead className="">
            <tr className="">
              <th className="p-3">Date</th>
              <th className="p-3">Start Time</th>
              <th className="p-3">End Time</th>
              <th className="p-3">Lunch Duration (Min)</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {attData &&
              attData.map((el) => {
                return (
                  <tr className="text-white" key={el.id}>
                    <td className="p-3">
                      {moment(el.att_date).format("DD/MM/YYYY")}
                    </td>
                    <td className="p-3">{el.start_time.substring(0, 5)}</td>
                    <td className="p-3">{el.end_time.substring(0, 5)}</td>
                    <td className="p-3">{el.lunch_min}</td>
                    <td className="p-3">
                      <span
                        onClick={() => handleUpdate(el.id)}
                        role="button"
                        className="material-icons px-1"
                      >
                        edit
                      </span>

                      <span
                        onClick={() => handleDelete(el.id)}
                        role="button"
                        className="material-icons px-1"
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}

      <ReactHTMLTableToExcel
        id="table-xls-button"
        sheet={`Monthly Report - ${month}`}
        table="table-to-xls"
        filename={`Monthly Report - ${month}`}
        className="btn btn-outline-light btn-sm float-end"
        buttonText="Export Report to Excel"
      />
    </div>
  );
};

export default AttDataList;
