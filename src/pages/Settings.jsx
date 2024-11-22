import React from "react";
import { useState } from "react";
import logo from "../components/Home/img1.png"
import {  CgNotifications } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";





const Settings = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [taskNotificationsEnabled, setTaskNotificationsEnabled] = useState(false);

  return (
    <div className="bg-rect-white max-w-md mx-auto p-6 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-semibold text-rect-light-purple mb-6"> Settings</h2>
    
      <div className="mb-6 flex flex-col justify-between h-full" >
      <div>
      <div className="flex items-center mb-4 ">
        <img src={logo} alt="Logo" className="w-14 h-12 mr-4" />
        <div>
          
          <h4 className="text-rect-light-purple text-lg font-semibold  pb-2">Profile</h4>
         </div>
      </div>
      <hr className="mb-4 border-rect-light-purple " />
    </div>
       
        <ul className="mt-4 space-y-3 text-gray-700">
          <li className="hover:bg-gray-600 hover:text-rect-white  rounded transition-all duration-300 text-rect-gray cursor-pointer">Edit Profile</li>
          <li className="hover:bg-gray-600 hover:text-rect-white  rounded transition-all duration-300 text-rect-gray cursor-pointer">Change Password</li>
          <li className="hover:bg-gray-600 hover:text-rect-white  rounded transition-all duration-300 text-rect-gray cursor-pointer">Privacy</li>
        </ul>
      </div>



        

     
      <div className="mb-6">
      <div>
      <div className="flex items-center mb-2 ">
      <CgNotifications  className="text-rect-light-purple  flex items-center" size={28}/>

        <div>
          
          <h4   className="text-rect-light-purple text-lg font-semibold  pb-1">Notifications</h4>
         </div>
      </div>
      <hr className="mb-4 border-rect-light-purple " />
    </div>
        <div className="flex justify-between items-center mt-4">
          <label className="text-rect-gray">Notifications</label>
          <input
            type="checkbox"
            className="toggle"
            checked={notificationsEnabled}
            onChange={() => setNotificationsEnabled(!notificationsEnabled)}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <label className="text-rect-gray">Tasks Notifications</label>
          <input
            type="checkbox"
            className="toggle"
            checked={taskNotificationsEnabled}
            onChange={() => setTaskNotificationsEnabled(!taskNotificationsEnabled)}
          />
        </div>
      </div>

  
      <div >
      <div>
      <div className="flex items-center mb-2 ">
      <CgMoreO className="text-rect-light-purple  flex items-center" size={20}/>

        <div>
          
          <h4   className="text-rect-light-purple text-lg font-semibold  pb-1 ml-1">More</h4>
         </div>
      </div>
      <hr className="mb-4 border-rect-light-purple " />
    </div>
        <ul className="mt-4 space-y-3 text-rect-gray">
          <li className="hover:bg-gray-600 hover:text-rect-white  rounded transition-all duration-300 text-rect-gray cursor-pointer">Language</li>
          <li className="hover:bg-gray-600 hover:text-rect-white  rounded transition-all duration-300 text-rect-gray cursor-pointer">Country</li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
