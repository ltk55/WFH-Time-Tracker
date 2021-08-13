import React, { useEffect, useContext } from "react";
import AttDataFinder from "../api/AttDataFinder";
import { AttDataContext } from "../context/AttDataContext";
import { useHistory } from "react-router-dom";
import "../index.css";

const AttDataList = () => {
  const { attData, setAttData } = useContext(AttDataContext);
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AttDataFinder.get("/"); // ("/") get the baseURL from AttDataFinder
        setAttData(response.data.data.attdata);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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

  return (
    <div className="flex justify-center">
      <div className="overflow-auto lg:overflow-visible ">
        <table className="able border-separate space-y-6 text-sm">
          <thead className="bg-gray-900">
            <tr className="rounded">
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
                  <tr className="bg-gray-300 text-black" key={el.id}>
                    <td className="p-3">{el.att_date}</td>
                    <td className="p-3">{el.start_time}</td>
                    <td className="p-3">{el.end_time}</td>
                    <td className="p-3">{el.lunch_min}</td>
                    {/* <td className="p-3">
                        <button
                          onClick={() => handleUpdate(el.id)}
                          className="btn btn-warning"
                        >
                          Update
                        </button>
                      </td>
                      <td className="p-3">
                        <button
                          onClick={() => handleDelete(el.id)}
                          className="btn btn-warning"
                        >
                          Delete
                        </button>
                      </td> */}
                    <td class="p-3">
                      <button
                        onClick={() => handleUpdate(el.id)}
                        class="text-gray-400 hover:text-gray-100 mx-2"
                      >
                        <span class="material-icons-outlined text-green-700">
                          edit
                        </span>
                      </button>
                      <button
                        onClick={() => handleDelete(el.id)}
                        class="text-gray-400 hover:text-gray-100 ml-2"
                      >
                        <i class="material-icons-round text-base">
                          <span class="material-icons-outlined text-red-600">
                            delete_forever
                          </span>
                        </i>
                      </button>
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
