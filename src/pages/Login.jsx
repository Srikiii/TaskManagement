import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="h-[98vh]  flex items-center justify-center">
    <div className="p-4 w-2/6 rounded bg-rect-white">
    <div className="text-3xl font-semibold text-rect-light-purple">LogIn</div>
    <input type="username" placeholder="username" className="bg-rect-white text-rect-gray px=3 py-2 my-3 w-full rounded" name="username" />
    <input type="password" placeholder="password" className="bg-rect-white text-rect-gray px=3 py-2 my-3 w-full rounded" name="password" />
   
    <div className="w-full flex items-center justify-between">
        <button className="bg-rect-blue text-xl font-semibuld text-black px-3 py-2 rounded hover:bg-rect-gray">Login</button>
        <Link to="/Signup" className="text-gray-400 hover:text-rect-light-purple">Not having an account ? Signup here</Link>
    </div>
    </div>
</div>
  );
};

export default Login;
