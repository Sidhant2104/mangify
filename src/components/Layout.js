'use client'; // add this at the top to enable hooks in Layout
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiBookOpen, FiMail, FiHelpCircle, FiLogIn } from "react-icons/fi";

export default function Layout({ children }) {
  const pathname = usePathname();

  // Helper for active nav
  const navLinkClass = (path) =>
    pathname === path
      ? "flex items-center gap-1 px-3 py-1 rounded-lg bg-[#23304d] text-cyan-200 font-bold ring-2 ring-cyan-400/40 mx-1 transition duration-200"
      : "flex items-center gap-1 px-3 py-1 rounded-lg hover:text-pink-300 text-white transition duration-200";

  return (
    <div className="min-h-screen flex flex-col bg-[#18033c]">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#151c2f] bg-opacity-90 sticky top-0 z-10">
        <div className="flex items-center gap-2 text-xl font-extrabold">
          <span className="text-cyan-300 text-2xl">✧</span>
          <span className="text-white">Mangify</span>
        </div>
        <div className="flex gap-2 items-center">
          <Link href="/" className={navLinkClass("/")}>
            <span className="inline-block">Home</span>
          </Link>
          <Link href="/converter" className={navLinkClass("/converter")}>
            <FiBookOpen className="inline-block" size={18} /> Converter
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>
          <Link href="/faq" className={navLinkClass("/faq")}>
            <FiHelpCircle size={17} /> FAQ
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            <FiMail size={17} /> Contact
          </Link>
          <Link href="/login" className={navLinkClass("/login") + " px-4"}>
            <FiLogIn size={18} /> Login
          </Link>
          <Link
            href="/signup"
            className={
              pathname === "/signup"
                ? "ml-2 px-4 py-2 rounded-xl font-bold bg-[#23304d] text-cyan-200 ring-2 ring-cyan-400/40 shadow-lg hover:scale-105 transition"
                : "ml-2 px-4 py-2 rounded-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 text-white shadow-lg hover:scale-[1.02] transition duration-300"
            }
          >
            Sign Up
          </Link>
        </div>
      </nav>
      {/* Page Content */}
      <main className="flex-1 flex flex-col">{children}</main>
      {/* Footer */}
      <footer className="w-full py-8 bg-[#151c2f] bg-opacity-80 text-center text-gray-400 text-lg font-medium border-t border-[#3d276c]">
        © 2025 Mangify. Transform learning into an adventure.
      </footer>
    </div>
  );
}
