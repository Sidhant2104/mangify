import React, { useState } from "react";
import Layout from "../components/Layout";
import { FiBookOpen, FiMail, FiHelpCircle, FiUser, FiLogIn } from "react-icons/fi";
import { MdOutlineAutoStories } from "react-icons/md";

function Converter() {
  const [input, setInput] = useState("");
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#27174c] via-[#222a55] to-[#5f2990] flex flex-col relative">
        {/* Main Section */}
        <main className="flex-1 flex flex-col px-5 py-6 items-center justify-start">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-cyan-300 to-pink-400 text-transparent bg-clip-text text-center">Manga Converter</h1>
          <p className="mt-2 mb-6 text-lg md:text-xl text-gray-300 text-center">
            Paste your history text and watch it transform into manga magic
          </p>
          <section className="w-full max-w-3xl rounded-2xl bg-[#211d3a] bg-opacity-80 border border-[#4e356e] shadow-xl p-6">
            <label className="block text-white font-bold mb-2 text-lg">Enter History Text</label>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              rows="7"
              className="w-full bg-[#171436] border border-[#323373] rounded-xl p-4 text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-500 resize-none"
              placeholder="Paste your history textbook paragraph here..."
            />
            <button
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-pink-400 text-white shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!input.trim()}
            >
              <MdOutlineAutoStories size={23} /> Convert to Manga
            </button>
            <div className="text-center text-sm text-gray-400 mt-3">
              Sign in to save your manga stories and track quiz scores
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default Converter;
