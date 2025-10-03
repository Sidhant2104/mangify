import React, { useState } from "react";
import Layout from "../components/Layout";
import { FiBookOpen, FiMail, FiHelpCircle, FiLogIn } from "react-icons/fi";
import { AiOutlineLogin } from "react-icons/ai";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#27174c] via-[#222a55] to-[#5f2990] relative">
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
              Don't have an account? <a href="/signup" className="text-cyan-300 hover:underline font-semibold">Sign up</a>
            </div>
          </form>
        </main>
      </div>
    </Layout>
  );
}
