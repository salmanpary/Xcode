import React, { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
const CreateApi = () => {
  const router = useRouter();

  const [apiName, setApiName] = React.useState("get");
  const [endpoint, setendpoint] = React.useState(""); // /api is the default endpoint
  const generatebuttontext = (apiname) => {
    switch (apiname) {
      case "get":
        return "Generate GET API";
      case "post":
        return "Generate POST API";
      case "update":
        return "Generate PUT API";
      case "delete":
        return "Generate DELETE API";
    }
  };
  const createrequest = async (apiname) => {
    switch (apiname) {
      case "get":
        const getres = await axios.get(
          `https://xcode321.herokuapp.com/geturl/${router.query.tablename}/`
        );
       setendpoint(getres.data.endpoint); // set the endpoint to the response data
        break;
      case "post":
        const postres = await axios.post(
          `https://xcode321.herokuapp.com/geturl/${router.query.tablename}/`
        );
        console.log(postres);
        break;
      case "update":
        const updateres = await axios.patch(
          `https://xcode321.herokuapp.com/geturl/${router.query.tablename}/`
        );
        console.log(updateres);
        break;
      case "delete":
        const deleteres = await axios.delete(
          `https://xcode321.herokuapp.com/geturl/${router.query.tablename}/`
        );
        console.log(deleteres);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Create Request</h1>
        <h2 className="text-2xl font-medium">{router.query.tablename}</h2>
      </div>
      <div className="flex">
        <h1 className="font-bold pt-2 pl-11">Create Request: </h1>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div className="relative w-64">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
              id="grid-state"
              onChange={(e) => {
                setApiName(e.target.value);
                console.log(e.target.value);
              }}
            >
              <option value="get">Get</option>
              <option value="post">Post</option>
              <option value="update">Update</option>
              <option value="delete">Delete</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {(apiName === "delete" || apiName === "update") && (
        <div className="flex">
          <h1 className="font-bold pt-2  pr-2">Field to update with: </h1>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div class="relative w-64">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                id="grid-state"
              >
                <option>Id</option>
                <option>Name</option>
                <option>Email</option>
                <option>Phone</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center items-center pl-28">
        <button
          className="bg-gradient-to-r from-[#183b86] to-[#3765dc] px-2 py-1 text-white w-48 h-10 rounded-md flex justify-center items-center"
          onClick={()=>createrequest(apiName)}
        >
          {generatebuttontext(apiName)}
        </button>
      </div>
     {endpoint && <p className="text-green-400">Successfully created</p>}

      {apiName === "get" && (
        <div className="flex justify-center items-center">
          <div className="bg-[#49cc90]  border border-[#49cc90]  px-4 py-2 rounded-l-md w-24 flex justify-center items-center">
            GET
          </div>

          <div className="bg-[#e8f6f0] border border-[#49cc90] px-4 py-2 rounded-r-md flex justify-around items-center ">
            <div>{endpoint}</div>
            <div>&nbsp; &nbsp; Get all {router.query.tablename}</div>
          </div>
        </div>
      )}
      {apiName === "post" && (
        <div className="flex justify-center items-center">
          <div className="bg-[#61aafe] border border-[#61aafe]  px-4 py-2 rounded-l-md w-24 flex justify-center items-center">
            POST
          </div>

          <div className="bg-[#ebf3fb] border border-[#61aafe] px-4 py-2 rounded-r-md flex justify-around items-center">
            <div>{endpoint}</div>
            <div>&nbsp; &nbsp; Save all users</div>
          </div>
        </div>
      )}
      {apiName === "update" && (
        <div className="flex justify-center items-center">
          <div className="bg-[#fca130] border border-[#fca130]  px-4 py-2 rounded-l-md  w-24 flex justify-center items-center">
            UPDATE
          </div>

          <div className="bg-[#fbf1e6] border border-[#fca130] px-4 py-2 rounded-r-md flex justify-around items-center">
            <div>{endpoint}</div>
            <div>&nbsp; &nbsp; Update with id</div>
          </div>
        </div>
      )}
      {apiName === "delete" && (
        <div className="flex justify-center items-center">
          <div className="bg-[#f93e3e] border border-[#f93e3e] px-4 py-2 rounded-l-md  w-24 flex justify-center items-center">
            DELETE
          </div>

          <div className="bg-[#fae7e7] border border-[#f93e3e] px-4 py-2 rounded-r-md flex justify-around items-center">
            <div>{endpoint}</div>
            <div>&nbsp; &nbsp;Delete with id</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateApi;
