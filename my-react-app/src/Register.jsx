import React from "react";
import { Routes, Route, Link } from "react-router-dom";
  
const Register = () => {
  return (
    <div className="min-h-screen w-full flex text-white bg-[#0b1220]">
      
      {/* LEFT SIDE – REGISTER FORM */}
      <div className="w-full md:w-1/3 bg-[#111827] p-8 flex flex-col justify-center z-10">
        
        <button className="text-sm text-gray-400 mb-6 hover:text-white">
          ← Go back
        </button>

        <h2 className="text-2xl font-semibold mb-6">
          Join our community
        </h2>

        {/* 👇 PARENT CONTROLS LAYOUT */}
        <form className="flex flex-col gap-4">

          {/* inputs are inline by default,
              parent flex-col makes them vertical */}
          <input type="text" placeholder="First name" className="input" />
          <input type="text" placeholder="Last name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="text" placeholder="Username" className="input" />
          <input
            type="password"
            placeholder="Password (min. 8 characters)"
            className="input"
          />
          <input
            type="password"
            placeholder="Repeat password"
            className="input"
          />

          {/* checkbox stays inline inside label */}
          <label className="flex gap-2 text-sm text-gray-400">
            <input type="checkbox" />
            <span>
              Yes, I agree to the{" "}
              <span className="text-blue-400 cursor-pointer">
                Terms of Service
              </span>
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition py-2 rounded-md font-medium"
          >
            Join us
          </button>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}  

             <Link     className="text-blue-400 cursor-pointer hover:underline" to="login" >
       
       login 
       </Link> 
  
                        
 
              
              
          </p>
        </form>
      </div>

      {/* RIGHT SIDE – IMAGE BACKGROUND */}
      <div
        className="hidden md:flex w-2/3 items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://edexec.co.uk/wp-content/uploads/2024/03/iStock-1174246575-678x381.jpg')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>

        <div className="relative z-10 max-w-md text-center">
          <h3 className="text-3xl font-semibold mb-4">
            Did you know...
          </h3>

          <p className="text-blue-400 mb-4">
            You can fight malware with our Mobile solution
          </p>

          <p className="text-sm text-gray-300 mb-6">
            Our community helps make the digital world safer by sharing tools
            and awareness.
          </p>

          <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition">
            Discover Mobile
          </button>
        </div>
      </div>  

       

    </div>
  );
};

export default Register;
