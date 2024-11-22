import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[98vh]  flex items-center justify-center ">
        <div className="p-4 w-2/6 rounded bg-rect-white">
        <div className="text-3xl font-semibold text-rect-light-purple">SignUp</div>
        <input type="username" placeholder="username" className=" my-3 text-rect-gray px=3 py-2 my-3 w-full rounded" name="username" />
        <input type="email" placeholder="email" className=" my-3 text-rect-gray px=3 py-2 my-3 w-full rounded" name="xyz@example.com" required />
        <input type="password" placeholder="password" className=" my-3 text-rect-gray px=3 py-2 my-3 w-full rounded" name="password" />
        <div className="w-full flex items-center justify-between">
        <button className="bg-rect-blue  text-xl font-semibuld text-black px-3 py-2 rounded hover:bg-rect-gray">SignUp</button>
        <Link to="/Login" className="text-gray-400 hover:text-rect-light-purple">Already having an account ? Login  here</Link>
    </div>
        </div>
    </div>
  );
};

export default Signup;