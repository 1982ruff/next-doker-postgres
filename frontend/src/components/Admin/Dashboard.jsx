import React from "react";
import Card from "./Card";
import Transactions from "./Transactions";
import Chart from "./Chart";
import Rightbar from "./Rightbar";

const Dashboard = () => {
  return (
    <div className="flex gap-5 ">
      <div className="flex flex-col justify-between gap-5 basis-3/4">
        <div className="flex justify-between gap-5">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className="basis-1/4">
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
