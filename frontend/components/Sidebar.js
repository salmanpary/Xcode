import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  AiOutlineDown,
  AiOutlineUp,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import Link from "next/link";
import axios from "axios";

const Sidebar = () => {
  
  const router = useRouter();
  const [tables,settables]=useState()
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  useEffect(() => {
    axios
      .get("https://xcode321.herokuapp.com/getalltables/")
      .then((res) => {
        const myjson=res.data.tables.replace(/&quot;/ig,'"')
        console.log(JSON.parse(myjson))
       settables(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="w-[20vw] bg-bg-prm h-screen fixed">
      <div className="flex flex-col items-center ">
        <div className="flex text-4xl items-center text-text-prm justify-center gap-4 mt-12">
          <AiOutlineFacebook className="cursor-pointer hover:scale-110" />
          <AiOutlineInstagram className="cursor-pointer hover:scale-110" />
          <AiOutlineTwitter className="cursor-pointer hover:scale-110" />
        </div>
        <Link href="/">
        <h3 className="text-3xl font-bold text-text-prm mt-12 cursor-pointer">
          Home
        </h3>
        </Link>
        <h3 className="text-3xl font-bold text-text-prm mt-6 cursor-pointer">
          Dashboard
        </h3>
        <div className="mt-12">
          <Link href="/dashboard/createtable">
            <h3
              className={`text-2xl cursor-pointer  text-text-prm mt6 px-2 py-2 ${
                router.pathname.includes("createtable")
                  ? "bg-gradient-to-r from-[#1e3b86] to-[#3765dc] rounded-sm"
                  : ""
              }`}
            >
              Create Table
            </h3>
          </Link>
          <div className="w-44">
            <h3
              onClick={() => {
                setToggle(!toggle);
                setToggle2(false);
              }}
              className={` text-2xl flex items-center text-text-prm mt-8 cursor-pointer h-10 px-2 py-2 ${
                router.pathname.includes("createapi")
                  ? "bg-gradient-to-r from-[#1e3b86] to-[#3765dc] rounded-sm"
                  : ""
              }`}
            >
              Create API
              {toggle ? (
                <AiOutlineUp className="ml-2 text-sm" />
              ) : (
                <AiOutlineDown className="ml-2 text-sm" />
              )}
            </h3>
          </div>
          {toggle && (
            <div className="text-lg text-text-prm p-4">
              <ul className="cursor-pointer">
                <Link href={"/dashboard/createapi/table1"}>
                  <li>-Table1</li>
                </Link>
                <Link href={"/dashboard/createapi/table2"}>
                  <li>-Table2</li>
                </Link>
                <Link href={"/dashboard/createapi/table3"}>
                  <li>-Table3</li>
                </Link>
              </ul>
            </div>
          )}
          <h3
            onClick={() => {
              setToggle2(!toggle2);
              setToggle(false);
            }}
            className={`text-2xl flex items-center  text-text-prm mt-8 cursor-pointer px-2 py-2 ${
              router.pathname.includes("apidocs")
                ? "bg-gradient-to-r from-[#1e3b86] to-[#3765dc] rounded-sm"
                : ""
            }`}
          >
            API Docs
            {toggle2 ? (
              <AiOutlineUp className="ml-2 text-sm font-bold" />
            ) : (
              <AiOutlineDown className="ml-2 text-sm font-bold" />
            )}
          </h3>
          {toggle2 && (
            <div className="text-xl text-text-prm p-4">
              <ul className="cursor-pointer">
                <Link href="/dashboard/apidocs/table1">
                  <li>-Table1</li>
                </Link>
                <Link href="/dashboard/apidocs/table2">
                  <li>-Table2</li>
                </Link>
                <Link href="/dashboard/apidocs/table3">
                  <li>-Table3</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
