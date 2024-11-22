import React from "react";
import { RxCross2 } from "react-icons/rx";



const InputData = ({InputDiv,setInputDiv}) => {
  return (
    <>
        <div className={`${InputDiv} top-0 left-0 bg-gray-500 opacity-80 h-screen w-full`}></div>
        <div className={`${InputDiv} top-0 left-0 flex items-center justify-center h-screen w-full`}>
            
            <div className="w-2/6 bg-rect-purple p-4 rounded">
            <div className="flex justify-end">
            <button className="test-2xl" onClick={() => setInputDiv("hidden")}><RxCross2 /></button>
            </div>
                <input type="text"placeholder="Title" name="Title"  className="px-3 py-2 rounded w-full bg-rect-white my-3 text-rect-gray"/>
                <textarea name="desc"  cols="30" rows="10" placeholder="Description.." className="px-3 py-2 rounded w-full bg-rect-white my-3 text-rect-gray"></textarea>
                <button className="px-3 py-2 bg-rect-blue rounded text-black text-xl font-semibold hover:bg-rect-gray">Submit</button>
            </div>
        </div>
    </>
  );
};

export default InputData;