import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
const ApiDocs = () => {
  const [tables, settables] = React.useState([]);

  const router = useRouter();
  console.log(router.query.tablename);
  const filterarray = (arr) => {
    const filteredarray = arr.filter((table) => {
      return table.tablename === router.query.tablename;
    });
    console.log(filteredarray[0]?.fields);
    //return fieldsarray in each array of object
    return filteredarray[0]?.fields;
  };
  console.log(filterarray(tables));

  useEffect(() => {
    axios
      .get("https://xcode321.herokuapp.com/getalltables/")
      .then((res) => {
        console.log(res.data.tables);
        settables(res.data.tables);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

      {filterarray(tables)?.map((item) => {
        return (
          <div className="flex px-2 py-0 ">
            <div className="border py-2 w-[13rem] px-2">{item.name}</div>
            <div className="border  py-2 w-[13rem] px-2">
              {item.type === "" ? "NA" : item.type}
            </div>
          </div>
        );
      })}
      <h1 className="text-xl">Docs</h1>
      <div className="flex flex-col gap-2">
        <div className="flex  items-center">
          <div className="bg-[#49cc90]  border border-[#49cc90]  px-4 py-2 rounded-l-md w-24 flex justify-center items-center">
            GET
          </div>

          <div className="bg-[#e8f6f0] border border-[#49cc90] px-4 py-2 rounded-r-md flex justify-around items-center ">
            <div>{`https://xcode321.herokuapp.com/xcode/${router.query.tablename}`}</div>
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

          <div className="bg-[#ebf3fb] border border-[#61aafe] px-4 py-2 rounded-r-md flex justify-around items-center ">
            <div>{`https://xcode321.herokuapp.com/xcode/${router.query.tablename}`}</div>
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

          <div className="bg-[#fbf1e6] border border-[#fca130] px-4 py-2 rounded-r-md flex justify-around items-center">
            <div>{`https://xcode321.herokuapp.com/xcode/${router.query.tablename}`}</div>
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

          <div className="bg-[#fae7e7] border border-[#f93e3e] px-4 py-2 rounded-r-md flex justify-around items-center ">
            <div>{`https://xcode321.herokuapp.com/xcode/${router.query.tablename}`}</div>
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
