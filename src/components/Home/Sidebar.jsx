import React from "react";
import { CgNotes } from "react-icons/cg";
import { MdLabelImportant } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { TbNoteOff } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from  "./img1.png";





const Sidebar = () => {
  const data = [
    { title: "All tasks", 
        icon: <CgNotes  className="text-rect-purple"/>, 
        link: "/"
     },

    
    { title: "Completed tasks", 
        
        icon: <FaCheckDouble className="text-rect-blue"/>, 
        link: "/Completedtasks" 
    },
    { title: "Incompleted tasks", 
        icon: <TbNoteOff className="text-rect-yellow"/>, 
        link: "/Incompletedtasks" },

    { title: "Important tasks",
          icon: <MdLabelImportant className="text-rect-pink" />,
          link: "/Importanttasks"
     },

    { title: "Settings", 
      icon: <IoMdSettings className="text-rect-light-purple"/>, 
      link: "/Settings",
      
    }
  ];

  return (
    <div className="flex flex-col justify-between h-full">
    <div>
      <div className="flex items-center mb-4 ">
        <img src={logo} alt="Logo" className="w-14 h-12 mr-4" />
        <div>
          <h2 className="text-xl font-semibold text-rect-gray">Do it</h2>
          <h4 className="text-rect-purple">Srikanth S</h4>
         </div>
      </div>
      <hr className="mb-4 border-rect-purple " />
    </div>
      <div className="flex flex-col">
        {data.map((items, index) => (
         
         <Link to={items.link}
            key={index}
            className="my-2 flex items-center hover:bg-gray-600 hover:text-rect-white p-2 rounded transition-all duration-300 text-rect-gray"
          >
            {items.icon}&nbsp;
            {items.title}
          </Link>
        ))}
      </div>
      <div className="mt-4">
        <button className="bg-rect-purple w-full p-2 rounded hover:bg-rect-light-purple transition-all duration-300">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
