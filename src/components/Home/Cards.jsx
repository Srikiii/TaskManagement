import { CiHeart } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


import { MdOutlineAddCircle } from "react-icons/md";

const Cards = ({ Home, setInputDiv, showCompletedOnly, showIncompleteOnly }) => {
  const data = [
    {
      title: "Complete Record Notes",
      desc: "I need complete the record notes writing with in the submission date 26/11/24",
      status: "In Complete" ,
    },
    {
      title: "Learn Python",
      desc: "I have started learning the python . Everyday i need code atlest 1 hr ",
      status: "Complete",
    },
    {
      title: "Assignments",
      desc: "Cpmleteing the daily assignments given in the college ",
      status: "Complete",
    },
    {
      title: "Projects",
      desc: "working on the final year project and  discuss about project with team members ",
      status: "In Complete",
    },
    {
      title: "Outdoor games ",
      desc: "Playing the Outdoor games with friends in the weekend of the every week ",
      status: "In Complete",
    },
  ];

  
  let filteredData = data;

  if (showCompletedOnly)
     {
    filteredData = data.filter((item) => item.status === "Complete");
  } 
  else if (showIncompleteOnly) 
    {
    filteredData = data.filter((item) => item.status === "In Complete");
  }

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {filteredData.map((item, i) => (
        <div key={i} className="flex flex-col justify-between bg-rect-white rounded-xl p-4">
          <div>
            <h3 className="text-xl font-semibold text-rect-gray">
              {item.title}
            </h3>
            <p className="text-rect-gray my-2">{item.desc}</p>
          </div>

          <div className="mt-4 w-full flex items-center">
            <button
              className={`${
                item.status === "In Complete" ? "bg-red-400" : "bg-green-700"
              } p-2 rounded w-3/6`}
            >
              {item.status}
            </button>

            <div className="text-white p-2 w-3/6 text-2xl font-semibold flex justify-around">

            <button> <CiHeart className="text-rect-pink text-3xl hover:bg-rect-gray p-1 rounded transition-all duration-300" /></button>
            <button> <FaEdit className="text-rect-yellow text-3xl hover:bg-rect-gray p-1 rounded transition-all duration-300" /></button>
              <button><MdDelete className="text-rect-blue text-3xl hover:bg-rect-gray p-1 rounded transition-all duration-300" /></button>
        </div>
        </div>
     </div>
      ))}

      {Home === "true" && (
        <button className="flex flex-col justify-center items-center bg-rect-white rounded-sm p-4 text-rect-gray hover:scale-105 hover:cursor-pointer transition-all duration-300 rounded-xl"onClick={() => setInputDiv("fixed")}>
          <MdOutlineAddCircle className="text-5xl" />
          <h2 className="text-2xl mt-4">Add Task</h2>
        </button>
      )}
    </div>
  );
};

export default Cards;
