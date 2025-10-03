import React, { useState } from "react";
import Layout from "../components/Layout";
import { FiBookOpen, FiMail, FiHelpCircle, FiLogIn } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Dummy handleSubmit function for the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, subject, message });
    alert('Message sent! (Check console for data)');
    // In a real application, you would send this data to a server here.
  };

  return (
    <Layout>
      <div
        className="min-h-screen flex flex-col relative"
        style={{
          background: `radial-gradient(at 70% 0%, #4a007a 0%, transparent 50%),
                       radial-gradient(at 0% 100%, #2a0352 0%, transparent 50%),
                       linear-gradient(to bottom right, #200540, #100020)`
        }}
      >
        <main className="flex-1 flex flex-col items-center justify-start px-2 pt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-cyan-300 to-pink-400 text-transparent bg-clip-text text-center">
            Get In Touch
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-200 text-center">Have feedback or questions? We'd love to hear from you!</p>
          
          {/* Contact Info Cards */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl mb-9">
            <div className="flex-1 min-w-[250px] bg-[#221d3f] rounded-xl border border-[#344a6d] px-8 py-6 flex items-center gap-4">
              <FiMail size={32} className="text-cyan-300" />
              <div>
                <div className="text-white text-lg font-bold">Email Us</div>
                <div className="text-cyan-100 text-base">support@mangify.com</div>
              </div>
            </div>
            <div className="flex-1 min-w-[250px] bg-[#221d3f] rounded-xl border border-[#344a6d] px-8 py-6 flex items-center gap-4">
              <FiHelpCircle size={32} className="text-pink-300" />
              <div>
                <div className="text-white text-lg font-bold">Response Time</div>
                <div className="text-cyan-100 text-base">We typically respond within 24 hours</div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form 
            className="w-full max-w-3xl bg-[#221d3f] border border-[#344a6d] rounded-2xl py-8 px-6 md:px-10 flex flex-col gap-5 shadow-xl"
            onSubmit={handleSubmit}
          >
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-white font-bold mb-1 text-lg">Your Name</label>
              <input
                id="name"
                type="text"
                className="w-full bg-[#181134] border border-[#323373] rounded-lg p-3 text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-400"
                placeholder="Enter your full name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-white font-bold mb-1 text-lg">Email Address</label>
              <input
                id="email"
                type="email"
                className="w-full bg-[#181134] border border-[#323373] rounded-lg p-3 text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-400"
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Subject Dropdown */}
            <div>
              <label htmlFor="subject" className="block text-white font-bold mb-1 text-lg">Subject</label>
              <select
                id="subject"
                className="w-full bg-[#181134] border border-[#323373] rounded-lg p-3 text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                required
              >
                <option value="">Select a subject</option>
                <option value="General Feedback">General Feedback</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-white font-bold mb-1 text-lg">Message</label>
              <textarea
                id="message"
                className="w-full bg-[#181134] border border-[#323373] rounded-lg p-3 text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-400 resize-none"
                rows={6}
                placeholder="Tell us what's on your mind..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
            </div>
            
            <button
              type="submit"
              className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-pink-400 text-white shadow-lg hover:scale-105 transition-all"
            >
              <AiOutlineSend size={22} /> Send Message
            </button>
          </form>
        </main>
      </div>
    </Layout>
  );
};

export default Contact;
