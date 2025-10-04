import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { MdOutlineAutoStories } from "react-icons/md";
import { FiBookOpen, FiHelpCircle, FiMail } from "react-icons/fi";

// Helper component for features section
function FeatureCard({ Icon, title, desc }) {
return (
<div className="bg-[#2a1750] rounded-2xl p-10 flex-1 min-w-[15rem] max-w-sm flex flex-col items-center shadow-xl border border-[#3d276c] hover:border-cyan-400 transition duration-300 ease-in-out">
<Icon className="h-14 w-14 text-cyan-300 mb-6" />
<h3 className="text-2xl font-extrabold text-white mb-3">{title}</h3>
<p className="text-lg text-cyan-100 text-center">{desc}</p>
</div>
);
}

export default function HomePage() {
return (
<Layout>
{/* 1. Hero Section with first image */}
<section className="relative flex flex-col items-center justify-center py-28 flex-1 w-full bg-gradient-to-br from-[#4c0099] to-[#18033c] overflow-hidden">
<img
src="/erik-mclean-27kCu7bXGEI-unsplash.jpg"
alt="Manga BG 1"
className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-lighten pointer-events-none select-none"
style={{ zIndex: 0 }}
/>
<div className="max-w-6xl mx-auto px-4 flex flex-col items-center relative z-10">
<Link href="/signup" passHref>
<button className="mb-6 px-7 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-pink-400 text-lg font-semibold text-white shadow-xl hover:shadow-cyan-400/50 transition duration-300 ease-in-out">
Learn History Through Manga
</button>
</Link>
<h1 className="text-6xl md:text-7xl font-extrabold text-white text-center mb-6 leading-tight">
Transform Textbooks
Into Epic Manga
</h1>
<p className="text-xl md:text-2xl text-stone-200 text-center mb-12 max-w-3xl mx-auto">
Convert boring history paragraphs into stunning manga-style stories. Test your knowledge with interactive quizzes.
</p>
<div className="flex space-x-6 justify-center">
<Link href="/signup" passHref>
<button className="px-10 py-4 rounded-xl font-bold text-xl bg-gradient-to-r from-cyan-400 to-pink-400 text-white shadow-2xl shadow-cyan-400/40 hover:scale-[1.05] transition duration-300 ease-in-out cursor-pointer">
Start Converting
</button>
</Link>
<Link href="/about" passHref>
<button className="px-10 py-4 rounded-xl font-bold text-xl border border-white text-white bg-transparent hover:bg-white/10 transition duration-300 ease-in-out cursor-pointer">
Learn More
</button>
</Link>
</div>
</div>
</section>

  {/* 2. Why Mangify Section with second image */}
  <section className="relative my-16 px-8 w-full bg-[#2a0650] overflow-hidden">
    <img
      src="/erik-mclean-8SeJUmfahu0-unsplash.jpg"
      alt="Manga BG 2"
      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-soft-light pointer-events-none select-none"
      style={{ zIndex: 0 }}
    />
    <div className="max-w-7xl mx-auto py-12 relative z-10">
      <h2 className="text-4xl font-extrabold text-white text-center mb-12">Why Mangify?</h2>
      <div className="flex justify-center flex-wrap md:flex-nowrap gap-6 md:gap-8 lg:gap-10">
        <FeatureCard
          Icon={MdOutlineAutoStories}
          title="AI-Powered"
          desc="Advanced AI converts text into manga-style narratives with stunning visuals"
        />
        <FeatureCard
          Icon={FiBookOpen}
          title="Engaging Stories"
          desc="Make learning fun with manga-style storytelling and visual narratives"
        />
        <FeatureCard
          Icon={FiHelpCircle}
          title="Quiz Games"
          desc="Test your knowledge with interactive quizzes based on converted content"
        />
        <FeatureCard
          Icon={FiMail}
          title="Instant Results"
          desc="Get your manga conversion in seconds and start learning immediately"
        />
      </div>
    </div>
  </section>

  {/* 3. Ready to Transform Section with updated image */}
  <section className="relative py-20 mb-0 w-full bg-gradient-to-br from-[#4c0080] to-[#2a0650] overflow-hidden">
    <img
      src="/markus-spiske-wQuvshBx8A8-unsplash.jpg" 
      alt="Manga BG 3"
      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-lighten pointer-events-none select-none"
      style={{ zIndex: 0 }}
    />
    <div className="max-w-4xl mx-auto text-center py-16 px-8 bg-transparent relative z-10">
      <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
        Ready to Transform Learning?
      </h3>
      <p className="text-xl md:text-2xl text-slate-200 mb-10">
        Join students worldwide who are making history come alive through manga
      </p>
      <button className="px-10 py-4 rounded-xl font-bold text-xl bg-gradient-to-r from-cyan-400 to-pink-400 text-white shadow-2xl hover:scale-[1.05] transition duration-300 ease-in-out">
        Get Started Free
      </button>
    </div>
  </section>

  {/* 4. Fourth section with updated image */}
  <section className="relative py-16 w-full bg-[#1b0532] overflow-hidden">
    <img
      src="/jonathan-cooper-OOKnZA6nhqA-unsplash.jpg" 
      alt="Manga BG 4"
      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity pointer-events-none select-none"
      style={{ zIndex: 0 }}
    />
    <div className="max-w-3xl mx-auto text-center py-8 px-6 bg-transparent relative z-10">
      <h4 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Discover Manga Like Never Before</h4>
      <p className="text-lg md:text-xl text-stone-200">
        Explore a world where history and stories come alive in manga panels. Your adventure starts here.
      </p>
    </div>
  </section>
</Layout>
);
}