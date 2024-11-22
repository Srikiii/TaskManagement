import React from "react";
import Sidebar from "../components/Home/Sidebar";
import { Outlet } from "react-router-dom"; 

const Home = () => {
  return (
    <div className="flex h-[98vh] gap-4 ">
      <div className="w-1/6 bg-rect-white border-white border-8 rounded-xl p-4 flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-5/6 border-rect-purple border-8 rounded-xl p-4 bg-rect-purple">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
