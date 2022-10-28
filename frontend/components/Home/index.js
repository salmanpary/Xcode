import axios from "axios";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
function HomePage() {
  const plans = [
    {
      plan: "Basic",
      feature1: "maximum 1 project",
      feature2: "10000 API calls",
      feature3: "No code Api builder",
      rate: "$0",
    },
    {
      plan: "Pro",
      feature1: "maximum 5 project",
      feature2: "100000 API calls",
      feature3: "10gb storage",
      rate: "$60/month",
    },
    {
      plan: "Scale",

      feature1: "Auto generated code snippets",
      feature2: "1000000 API calls",
      feature3: "50gb storage",
      rate: "$120/month",
    },
  ];
  useEffect(() => {
    axios
      .get("https://xcode321.herokuapp.com/getalltable")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url('/bg.png')`,
        backgroundSize: "100vw 100vh",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-bg-prm  "
    >
      <div className="min-h-screen">
        <ul className="flex text-lg font-semibold pt-6 justify-end pr-20">
          <li className="text-[#4E7AEA] mr-12">Home</li>
          <li className="text-white mr-12">Pricing</li>
          <Link href={"/dashboard"}>
            <li className="text-white mr-12">Dashboard</li>
          </Link>
          <li className="text-text-prm mr-12">Log in/Sign up</li>
        </ul>
        <div className="bg-hero mt-60 ml-32">
          <Image src="/Logo.png" width={200} height={100} />
          <p className="text-text-prm text-4xl font-semibold max-w-[30ch] mt-8">
            Develop your website’s backend efforlessly with XCode{" "}
          </p>
        </div>
      </div>
      <h3 className="text-5xl text-center font-bold text-text-prm">Pricing</h3>
      <div className=" flex pb-12 justify-evenly mt-20">
        {plans.map((plan) => (
          <PriceCard
            plan={plan.plan}
            feature1={plan.feature1}
            feature2={plan.feature2}
            feature3={plan.feature3}
            rate={plan.rate}
          />
        ))}
      </div>
    </div>
  );
}

const PriceCard = ({ plan, feature1, feature2, feature3, rate }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(152.97deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%)",
        backdropFilter: "blur(21px)",
        borderRadius: "16px",
      }}
      className="text-white p-12 flex flex-col items-center "
    >
      <h3 className="text-5xl font-bold text-white min-w-[10rem] rounded-lg">
        {plan}
      </h3>
      <ul className="text-3xl mt-8">
        <li className="mt-4">{feature1}</li>
        <li className="mt-4">{feature2}</li>
        <li className="mt-4">{feature3}</li>
      </ul>
      <h3 className="text-5xl font-bold mt-6">{rate}</h3>
    </div>
  );
};
export default HomePage;
