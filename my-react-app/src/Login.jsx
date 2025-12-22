import React from "react"; 
import { Link } from "react-router-dom";

import Register from './Register' 
const Login = () => {
  return (
    <div className="min-h-screen w-full flex text-white bg-[#0b1220]">
      
      {/* LEFT SIDE – LOGIN FORM */}
      <div className="w-full md:w-1/3 bg-[#111827] p-8 flex flex-col justify-center z-10">
        
        <button className="text-sm text-gray-400 mb-6 hover:text-white">
          ← Go back
        </button>

        <h2 className="text-2xl font-semibold mb-6">
          Login to your account
        </h2>

        {/* FORM */}
        <form className="flex flex-col gap-4">

          {/* EMAIL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input"
            />
          </div>

          {/* PASSWORD */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-400">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded-md font-medium mt-2"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Don’t have an account?{" "}

            <Link    className="text-blue-400 cursor-pointer hover:underline"   to="/Register">    Register Hare 
              </Link>
           
          </p>
        </form>
      </div>

    
      <div
        className="hidden md:flex w-2/3 items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://edexec.co.uk/wp-content/uploads/2024/03/iStock-1174246575-678x381.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 max-w-md text-center">
          <h3 className="text-3xl font-semibold mb-4">
            Welcome Back
          </h3>

          <p className="text-blue-400 mb-4">
            Secure access to your dashboard
          </p>

          <p className="text-sm text-gray-300 mb-6">
            Login to manage your account and access secure services.
          </p>
        </div>
      </div>
  
    </div>
  );
};

export default Login;
