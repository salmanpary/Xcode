import React from "react";
const CreateApi = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Create Request</h1>
        <h2 className="text-2xl font-medium">Table name</h2>
      </div>
      <div className="flex">
        <h1 className="font-bold pt-2 pl-11">Create Request: </h1>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <div class="relative w-64">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
              id="grid-state"
            >
              <option>Get</option>
              <option>Post</option>
              <option>Update</option>
              <option>Delete</option>
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
      <div className="flex justify-center items-center pl-28">
        <button className="bg-gradient-to-r from-[#183b86] to-[#3765dc] px-2 py-1 text-white w-48 h-10 rounded-md flex justify-center items-center">
          Create get Req
        </button>
      </div>
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
      <div className="flex justify-center items-center">
        <div className="bg-[#49cc90]  border border-[#49cc90]  px-4 py-2 rounded-l-md w-24 flex justify-center items-center">GET</div>

        <div className="bg-[#e8f6f0] border border-[#49cc90] px-4 py-2 rounded-r-md flex justify-around items-center w-72">
          <div>/alf/aads/</div>
          <div>Description</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-[#61aafe] border border-[#61aafe]  px-4 py-2 rounded-l-md w-24 flex justify-center items-center">POST</div>

        <div className="bg-[#ebf3fb] border border-[#61aafe] px-4 py-2 rounded-r-md flex justify-around items-center w-72">
          <div>/alf/aads/</div>
          <div>Description</div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-[#fca130] border border-[#fca130]  px-4 py-2 rounded-l-md  w-24 flex justify-center items-center">UPDATE</div>

        <div className="bg-[#fbf1e6] border border-[#fca130] px-4 py-2 rounded-r-md flex justify-around items-center w-72">
          <div>/alf/aads/</div>
          <div>Description</div>
        </div>
      </div>
      
      <div className="flex justify-center items-center">
        <div className="bg-[#f93e3e] border border-[#f93e3e] px-4 py-2 rounded-l-md  w-24 flex justify-center items-center">DELETE</div>

        <div className="bg-[#fae7e7] border border-[#f93e3e] px-4 py-2 rounded-r-md flex justify-around items-center w-72">
          <div>/alf/aads/</div>
          <div>Description</div>
        </div>
      </div>
      <p className="text-green-400">Successfully created</p>
    </div>
  );
};

export default CreateApi;
