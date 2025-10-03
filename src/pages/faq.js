import React, { useState } from "react";

const faqs = [
  {
    question: "How does the manga conversion work?",
    answer:
      "Our AI analyzes your history paragraph and transforms it into an engaging manga-style visual story, complete with character dialogue and narrative structure."
  },
  {
    question: "Do I need to create an account?",
    answer:
      "You can use Mangify without an account, but creating one allows you to save your stories and quiz progress for future reference."
  },
  {
    question: "What types of history content work best?",
    answer:
      "Mangify is optimized for textbook-style historical paragraphs, especially those describing events, people, and cause-effect relationships."
  },
  {
    question: "How are the quiz questions generated?",
    answer:
      "Our platform automatically creates interactive quizzes based on the key facts and story progression in your manga conversion."
  },
  {
    question: "Can I save and share my manga stories?",
    answer:
    "Absolutely! Logged-in users can save their manga stories and share them easily with friends or classmates."
  },
  {
    question: "Is there a limit to how much text I can convert?",
    answer:
    "You can convert up to 1000 words at a time. For longer content, break it into smaller sections for the best results."
  },
  {
    question: "What if I disagree with how my text was converted?",
    answer:
      "We're continually improving our AI model. If something doesn't look right, send us feedback and our team will review your case."
  },
  {
    question: "Is Mangify free to use?",
    answer:
      "Mangify is free to use for students and educators. Premium features may be available in the future."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-5 text-white">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-teal-300">✧</span>
          <span className="text-2xl font-bold">Mangify</span>
        </div>
        <div className="hidden md:flex gap-7 items-center">
          <a href="/" className="hover:text-pink-300">Home</a>
          <a href="/converter" className="hover:text-pink-300">Converter</a>
          <a href="/about" className="hover:text-pink-300">About</a>
          <a href="/faq" className="bg-[#23304d] text-cyan-300 font-bold px-4 py-2 rounded-lg ring-2 ring-cyan-400/40">FAQ</a>
          <a href="/contact" className="hover:text-pink-300">Contact</a>
          <a href="/login" className="hover:underline">Login</a>
          <a href="/signup" className="px-4 py-2 ml-3 rounded-lg bg-gradient-to-r from-teal-400 to-pink-400 text-white font-semibold shadow-md hover:scale-105 transition-transform">Sign Up</a>
        </div>
      </nav>
      <main className="flex-1 flex flex-col px-4 pb-8 items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400 mt-10 mb-2 text-center">
          Frequently Asked Questions
        </h1>
        <p className="mb-10 text-lg text-gray-200 text-center">
          Everything you need to know about Mangify
        </p>
        <div className="w-full max-w-4xl flex flex-col gap-4 mt-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              // --- FIX APPLIED HERE ---
              // Changed bg-opacity-60 to bg-opacity-90 for a much darker box against the background.
              className={`rounded-xl bg-indigo-900 bg-opacity-90 p-6 ring-1 ring-cyan-300 transition-all shadow ${
                openIndex === idx ? "border border-cyan-300" : ""
              }`}
            >
              <button
                className="flex justify-between items-center w-full text-left text-lg font-bold text-white"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                  width={28}
                  height={28}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 20 20"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="mt-3 text-base font-medium text-gray-200 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* "Still have questions?" section */}
        <div className="w-full max-w-4xl mt-12 mb-4 rounded-2xl bg-indigo-900 bg-opacity-90 border border-indigo-500/30 p-10 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 text-center">
            Still have questions?
          </h2>
          <p className="text-base text-gray-200 mb-5 text-center">
            We're here to help! Reach out to us through our contact page.
          </p>
          <a
            href="/contact"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-pink-400 text-white font-bold shadow-lg hover:scale-105 transition-all"
          >
            Contact Us
          </a>
        </div>
      </main>
      <footer className="w-full text-center text-gray-300 text-sm font-medium py-6">
        © 2025 Mangify. Transform learning into an adventure.
      </footer>
    </div>
  );
}

export default FAQ;