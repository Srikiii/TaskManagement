import React, { useState } from "react";
import Cards from "../components/Home/Cards";
import { MdOutlineAddCircle } from "react-icons/md";
import InputData from "../components/Home/InputData";

const Alltasks = () => {
  const [ InputDiv, setInputDiv] = useState("hidden");
  return (
    <>
    <div >
      <div>
        <h3 className="ml-12 text-5xl">Today's Tasks</h3>
      </div>
      <div className="w-full flex justify-end px-4 py-2 ">
        <button onClick={() => setInputDiv("fixed")}>
        <MdOutlineAddCircle className="text-5xl text-white hover:text-rect-gray transition-all duration-300" />
        </button>
      </div>
      <Cards Home={"true"} setInputDiv={setInputDiv}/>
    </div>
  <InputData InputDiv={InputDiv} setInputDiv={setInputDiv} />
    </>
  );
};

export default Alltasks;
