import React from "react";
import { useHistory } from "react-router-dom";

const Header = () => {
  let history = useHistory();

  return (
    <div className="header text-light row justify-content-between pt-5 pb-2 mb-5">
      <h2
        className="header-logo col-11 px-4"
        onClick={() => history.push("/")}
        role="button"
        data-testid="header-logo"
      >
        <span>🕑</span> Work Time Tracker
      </h2>
      <span
        onClick={() => history.push("/setting")}
        role="button"
        className="material-icons px-1 text-white col-1 m-auto text-end px-4"
        data-testid="setting-logo"
      >
        settings
      </span>
    </div>
  );
};

export default Header;
