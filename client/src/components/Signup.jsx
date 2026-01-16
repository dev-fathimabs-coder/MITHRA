import React from "react";
import { Link } from "react-router-dom";
import mithralogo from "../assets/images/mithralogo.png";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-black text-zinc-100 px-4">

      {/* Card */}
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-xl 
        p-8 border border-white/20 shadow-2xl p-8 text-white">
        <div className="text-center mb-6">
          <div className="flex justify-center items-center space-x-2">
            <img
              src={mithralogo}
              alt="Mythra Logo"
              className="h-15 rounded-full"
            />
            <h1 className="text-4xl font-bold bg-linear-to-r from-[#F5C77A]  via-purple-400 to-[#6C5CE7] bg-clip-text text-transparent">
              Mythra
            </h1>
          </div>
          <p className="text-sm text-gray-300 mt-1">
            Where Movies & Books Become Memories 🎬📚
          </p>
        </div>
        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-300 mb-1">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>


          <div>
            <label className="block text-sm text-zinc-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>


          <div>
            <label className="block text-sm text-zinc-300 mb-1">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>


          <div>
            <label className="block text-sm text-zinc-300 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900/80 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>


          {/* CTA Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
          >
            Sign Up
          </button>
        </form>


        {/* Footer */}
        <p className="text-center text-zinc-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-[#F5C77A] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}


export default Signup;
