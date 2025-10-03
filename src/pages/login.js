import React, { useState } from "react";
import { FiBookOpen, FiMail, FiHelpCircle, FiLogIn } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#27174c] via-[#222a55] to-[#5f2990] relative">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#151c2f] bg-opacity-80">
        <div className="flex items-center gap-2 text-xl font-extrabold">
          <span className="text-cyan-300 text-2xl">✧</span>
          <span className="text-white">Mangify</span>
        </div>
        <div className="flex gap-2 items-center">
          <a href="#" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:text-pink-300 text-white">
            <span className="inline-block">Home</span>
          </a>
          <a href="#" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:text-pink-300 text-white">
            <FiBookOpen size={18} /> Converter
          </a>
          <a href="#" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:text-pink-300 text-white">
            About
          </a>
          <a href="#" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:text-pink-300 text-white">
            <FiHelpCircle size={17} /> FAQ
          </a>
          <a href="#" className="flex items-center gap-1 px-3 py-1 rounded-lg hover:text-pink-300 text-white">
            <FiMail size={17} /> Contact
          </a>
          <a href="#" className="flex items-center gap-1 px-4 py-1 rounded-lg bg-[#23304d] text-cyan-200 font-bold ring-2 ring-cyan-400/40 mx-1">
            <FiLogIn size={18} /> Login
          </a>
          <a href="#" className="ml-2 px-4 py-2 rounded-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-white shadow-lg hover:scale-105 transition">Sign Up</a>
        </div>
      </nav>

      {/* Login Heading */}
      <main className="flex-1 flex flex-col items-center justify-center px-2 pt-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-cyan-300 to-pink-400 text-transparent bg-clip-text text-center">
          Welcome Back
        </h1>
        <p className="mb-8 text-lg md:text-xl text-gray-200 text-center">Sign in to continue your manga journey</p>

        <form className="w-full max-w-md bg-[#221d3f] border border-[#344a6d] rounded-2xl py-10 px-8 flex flex-col gap-5 shadow-xl">
          <div>
            <label className="block text-white font-bold mb-1 text-lg">Email</label>
            <input
              type="email"
              className="w-full bg-[#181134] border border-[#323373] rounded-lg p-3 text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-400"
              placeholder="your.email@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-white font-bold mb-1 text-lg">Password</label>
            <input
              type="password"
              className="w-full bg-[#181134] border border-[#323373] rounded-lg p-3 text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-400"
              placeholder="********"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-pink-400 text-white shadow-lg hover:scale-105 transition-all"
          >
            <AiOutlineLogin size={22} /> Sign In
          </button>

          <div className="text-center text-base text-gray-300 mt-5">
            Don't have an account? <a href="#" className="text-cyan-300 hover:underline font-semibold">Sign up</a>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-transparent text-center text-gray-300 text-lg font-medium">
        © 2025 Mangify. Transform learning into an adventure.
      </footer>
    </div>
  );
}
