import React, { useState } from "react";
import Layout from "../components/Layout";
import { MdOutlineAutoStories } from "react-icons/md";

function Converter() {
  console.log("Converter component is rendering"); // <-- ADD THIS LINE

  const [input, setInput] = useState("");
  const [mangaImages, setMangaImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
     console.log("handleConvert was called!"); // <-- ADD THIS LINE
    setLoading(true);
    setMangaImages([]);

    try {
      const res = await fetch("http://localhost:3001/api/convert-manga", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paragraph: input,
          lessonId: Date.now().toString(),
        }),
      });

      const data = await res.json();

      if (data.panels && Array.isArray(data.panels)) {
        setMangaImages(data.panels.map((panel) => panel.image_url));
      } else if (data.error) {
        alert("Error: " + data.error);
      } else {
        alert("Unexpected response from server");
      }
    } catch (error) {
      console.error("Conversion error:", error);
      alert(
        "Failed to convert text. Please check if the backend server is running."
      );
    }

    setLoading(false);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#27174c] via-[#222a55] to-[#5f2990] flex flex-col relative overflow-hidden">
        {/* Background */}
        <img
          src="/BW2.jpg"
          alt="Manga faded background"
          className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-lighten pointer-events-none select-none"
          style={{ zIndex: 0 }}
        />

        {/* Main Section */}
        <main className="flex-1 flex flex-col px-5 py-6 items-center justify-start relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 bg-gradient-to-r from-cyan-300 to-pink-400 text-transparent bg-clip-text text-center">
            Manga Converter
          </h1>
          <p className="mt-2 mb-6 text-lg md:text-xl text-gray-300 text-center">
            Paste your history text and watch it transform into manga magic
          </p>

          <section className="w-full max-w-3xl rounded-2xl bg-[#211d3a] bg-opacity-80 border border-[#4e356e] shadow-xl p-6">
            <label className="block text-white font-bold mb-2 text-lg">
              Enter History Text
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows="7"
              className="w-full bg-[#171436] border border-[#323373] rounded-xl p-4 text-base text-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder:text-gray-500 resize-none"
              placeholder="Paste your history textbook paragraph here..."
            />
            <button
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-pink-400 text-white shadow-lg hover:scale-[1.02] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={!input.trim() || loading}
              onClick={handleConvert}
            >
              {loading ? (
                "Converting..."
              ) : (
                <>
                  <MdOutlineAutoStories size={23} /> Convert to Manga
                </>
              )}
            </button>
          </section>

          {/* Images display */}
          {mangaImages.length > 0 && (
            <div className="w-full max-w-5xl mt-10">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Your Manga Story
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mangaImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-[#211d3a] bg-opacity-80 border border-[#4e356e] rounded-xl p-4"
                  >
                    <img
                      src={img}
                      alt={`Manga panel ${idx + 1}`}
                      className="rounded-lg shadow-lg w-full max-w-sm h-auto object-contain border border-gray-600"
                      onError={(e) => {
                        console.error("Image failed to load:", img);
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=Failed+to+Load";
                      }}
                    />
                    <p className="text-cyan-300 text-sm mt-3 font-semibold">
                      Panel {idx + 1}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Loading animation */}
          {loading && (
            <div className="w-full max-w-4xl mt-10 text-center">
              <div className="text-cyan-300 text-lg">
                Generating your manga panels...
              </div>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
                <div
                  className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}

export default Converter;
