import React from "react";
import Sidebar from "../Sidebar";
import CreateApi from "./CreateApi";
const CreateApiPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="mx-auto">
        <CreateApi />
      </div>
    </div>
  );
};

export default CreateApiPage;
