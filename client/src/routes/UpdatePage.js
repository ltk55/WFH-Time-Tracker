import React from "react";
import UpdateAttData from "../components/UpdateAttData";
import Header from "../components/Header";

const UpdatePage = () => {
  return (
    <div className="pt-5" data-testid="update">
      <Header />
      <UpdateAttData />
    </div>
  );
};

export default UpdatePage;
