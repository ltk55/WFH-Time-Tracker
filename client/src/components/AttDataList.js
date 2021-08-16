import React, { useEffect, useContext } from "react";
import AttDataFinder from "../api/AttDataFinder";
import { AttDataContext } from "../context/AttDataContext";
import { useHistory } from "react-router-dom";

const AttDataList = () => {
  const { attData, setAttData, month } = useContext(AttDataContext);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AttDataFinder.get("/"); // ("/") get the baseURL from AttDataFinder

        const filteredAttData = response.data.data.attdata.filter(
          (el) => Number(el.att_date.substring(5, 7)) === Number(month)
        );

        setAttData(filteredAttData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [month, setAttData]);

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

  // if (attData.length > 0) {
  //   filteredAttData = attData.filter(
  //     (el) => Number(el.att_date.substring(5, 7)) === Number(month)
  //   );
  // }

  return (
    <div className="flex justify-center">
      <div className="overflow-auto lg:overflow-visible ">
        <table className="table table-dark table-striped">
          <thead className="">
            <tr className="">
              <th className="p-3 text-yellow-400">Date</th>
              <th className="p-3 text-green-200">Start Time</th>
              <th className="p-3 text-blue-400">End Time</th>
              <th className="p-3 text-purple-300">Lunch Time (Min)</th>
              <th className="p-3 text-red-300">Edit</th>
            </tr>
          </thead>
          <tbody>
            {attData &&
              attData.map((el) => {
                return (
                  <tr className="text-white" key={el.id}>
                    <td className="p-3">{el.att_date.substring(0, 10)}</td>
                    <td className="p-3">{el.start_time.substring(0, 5)}</td>
                    <td className="p-3">{el.end_time.substring(0, 5)}</td>
                    <td className="p-3">{el.lunch_min}</td>
                    <td className="p-3">
                      <i
                        className="material-icons-round text-base"
                        onClick={() => handleUpdate(el.id)}
                        role="button"
                      >
                        <span className="material-icons-outlined .text-danger">
                          edit
                        </span>
                      </i>

                      <i
                        className="material-icons-round text-base"
                        onClick={() => handleDelete(el.id)}
                        role="button"
                      >
                        <span className="material-icons-outlined">
                          delete_forever
                        </span>
                      </i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttDataList;
