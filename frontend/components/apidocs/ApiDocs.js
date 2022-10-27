import React from "react";
import { useRouter } from "next/router";
const ApiDocs = () => {
  const router = useRouter();
  console.log(router.query);
  const ar = [
    {
      name: "fasd",
      type: "fasdfa",
    },
    {
      name: "fdfadasd",
      type: "fasdfa",
    },
    {
      name: "fasd",
      type: "fasdfa",
    },
  ];
  const ar2 = [
    {
      request: "get",
      url: "/api/v1/auth/login",
    },
    {
      request: "post",
      url: "/api/v1/auth/login",
    },
    {
      request: "update",
      url: "/api/v1/auth/login",
    },
    {
      request: "delete",
      url: "/api/v1/auth/login",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-xl font-bold">Schema</h1>
      <div className="flex px-2 ">
        <div className="border rounded-tl-md  px-2 py-2 w-[13rem] bg-gray-300 font-semibold">
          Name
        </div>
        <div className="border rounded-tr-md px-2 py-2 w-[13rem] bg-gray-300 font-semibold">
          Type
        </div>
      </div>

      {ar.map((item) => {
        return (
          <div className="flex px-2 py-0 ">
            <div className="border py-2 w-[13rem] px-2">{item.name}</div>
            <div className="border  py-2 w-[13rem] px-2">{item.type}</div>
          </div>
        );
      })}
      <h1 className="text-xl">Docs</h1>
      <div className="flex flex-col gap-2">
        <div className="flex  items-center">
          <div className="bg-[#49cc90]  border border-[#49cc90]  px-4 py-2 rounded-l-md w-24 flex justify-center items-center">
            GET
          </div>

          <div className="bg-[#e8f6f0] border border-[#49cc90] px-4 py-2 rounded-r-md flex justify-around items-center w-72">
            <div>/alf/aads/</div>
            <button
              className="w-16 bg-[#041541] text-white py-[0.3px] rounded-md"
              onClick={() => {
                router.push("/dashboard/apidocs/tablename/get");
              }}
            >
              Docs
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#61aafe] border border-[#61aafe]  px-4 py-2 rounded-l-md w-24 flex justify-center items-center">
            POST
          </div>

          <div className="bg-[#ebf3fb] border border-[#61aafe] px-4 py-2 rounded-r-md flex justify-around items-center w-72">
            <div>/alf/aads/</div>
            <button
              className="w-16 bg-[#041541] text-white py-[0.3px] rounded-md"
              onClick={() => {
                router.push("/dashboard/apidocs/tablename/post");
              }}
            >
              Docs
            </button>
          </div>
        </div>
        <div className="flex  items-center">
          <div className="bg-[#fca130] border border-[#fca130]  px-4 py-2 rounded-l-md  w-24 flex justify-center items-center">
            UPDATE
          </div>

          <div className="bg-[#fbf1e6] border border-[#fca130] px-4 py-2 rounded-r-md flex justify-around items-center w-72">
            <div>/alf/aads/</div>
            <button
              className="w-16 bg-[#041541] text-white py-[0.3px] rounded-md"
              onClick={() => {
                router.push("/dashboard/apidocs/tablename/post");
              }}
            >
              Docs
            </button>
          </div>
        </div>

        <div className="flex  items-center">
          <div className="bg-[#f93e3e] border border-[#f93e3e] px-4 py-2 rounded-l-md  w-24 flex justify-center items-center">
            DELETE
          </div>

          <div className="bg-[#fae7e7] border border-[#f93e3e] px-4 py-2 rounded-r-md flex justify-around items-center w-72">
            <div>/alf/aads/</div>
            <button
              className="w-16 bg-[#041541] text-white py-[0.3px] rounded-md"
              onClick={() => {
                router.push("/dashboard/apidocs/tablename/post");
              }}
            >
              Docs
            </button>
          </div>
        </div>
      </div>
      <button className="bg-[#ff6e37] px-4 text-white py-1 rounded-sm mt-3">
        Export to Postman
      </button>
    </div>
  );
};

export default ApiDocs;
