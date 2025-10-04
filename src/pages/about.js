import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex flex-col relative overflow-hidden">
        {/* Fade manga background image */}
        <img
          src="/markus-spiske-wQuvshBx8A8-unsplash.jpg"
          alt="Manga faded background"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-lighten pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />
        <main className="flex-1 flex flex-col items-center py-12 px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400 mb-2 mt-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">Mangify</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl text-center">
            Revolutionizing history education through the power of manga
          </p>

          {/* Mission Section */}
          <section className="w-full max-w-5xl mb-8 rounded-2xl bg-indigo-950 bg-opacity-90 border border-indigo-800 shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl text-cyan-300">🎯</span>
              <span className="text-2xl font-bold text-white">Our Mission</span>
            </div>
            <p className="text-gray-200 text-lg pl-11">
              We believe learning history should be engaging, visual, and fun. Mangify transforms traditional textbook paragraphs into captivating manga-style stories that bring historical events to life. Our AI-powered platform makes history accessible and exciting for students of all ages.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="w-full max-w-5xl mb-8 rounded-2xl bg-indigo-950 bg-opacity-90 border border-indigo-800 shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl text-pink-300">📖</span>
              <span className="text-2xl font-bold text-white">How It Works</span>
            </div>
            <ol className="pl-14 mt-2 space-y-3">
              <li className="flex items-start gap-3">
                <span className="h-8 w-8 bg-cyan-900 text-cyan-200 font-bold flex items-center justify-center rounded-full text-lg">1</span>
                <div>
                  <span className="text-white font-bold">Paste Your Text</span>
                  <div className="text-gray-200 text-base">Copy any history paragraph from your textbook or notes</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-8 w-8 bg-pink-900 text-pink-200 font-bold flex items-center justify-center rounded-full text-lg">2</span>
                <div>
                  <span className="text-white font-bold">AI Transformation</span>
                  <div className="text-gray-200 text-base">Our AI analyzes and converts the content into manga-style panels</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-8 w-8 bg-purple-900 text-purple-200 font-bold flex items-center justify-center rounded-full text-lg">3</span>
                <div>
                  <span className="text-white font-bold">Interactive Learning</span>
                  <div className="text-gray-200 text-base">Test your knowledge with automatically generated quizzes</div>
                </div>
              </li>
            </ol>
          </section>

          {/* Why Manga Section */}
          <section className="w-full max-w-5xl mb-8 rounded-2xl bg-indigo-950 bg-opacity-90 border border-indigo-800 shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl text-orange-400">⚡</span>
              <span className="text-2xl font-bold text-white">Why Manga?</span>
            </div>
            <div className="text-lg text-gray-200 pl-11 mb-2">
              Manga is more than just Japanese comics – it&apos;s a powerful storytelling medium that:
            </div>
            <ul className="pl-16 list-disc space-y-1 text-base">
              <li className="text-cyan-200">Increases engagement and information retention</li>
              <li className="text-pink-200">Makes complex historical events more accessible</li>
              <li className="text-purple-200">Appeals to visual learners and diverse learning styles</li>
              <li className="text-orange-200">Creates memorable narratives that stick with students</li>
            </ul>
          </section>

          {/* Team Section */}
          <section className="w-full max-w-5xl mb-8 rounded-2xl bg-indigo-950 bg-opacity-90 border border-indigo-800 shadow-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl text-purple-300">👥</span>
              <span className="text-2xl font-bold text-white">Our Team</span>
            </div>
            <p className="text-gray-200 text-lg pl-11">
              Mangify is a passionate student-led project born from the excitement of a hackathon. Our diverse team of learners and creators came together to innovate history education by blending AI, manga art, and interactive storytelling. We’re committed to making learning fun, visual, and accessible for all students.
            </p>
          </section>
        </main>
      </div>
    </Layout>
  );
}
