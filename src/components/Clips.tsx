import {useState} from "react";

type Clip = {
  id: string;
  title: string;
  embedUrl: string;
};

type FeaturedClipsProps = {
  recentClips: Clip[];
  popularClips: Clip[];
};

export default function FeaturedClips({
  recentClips,
  popularClips,
}: FeaturedClipsProps) {
  const [activeTab, setActiveTab] = useState<"recent" | "popular">("popular");

  const clipsToShow =
    activeTab === "recent" ? recentClips.slice(0, 2) : popularClips.slice(0, 2);

  return (
    <section
      id="clips"
      className="text-center px-4 py-8 bg-gradient-to-t from-purple-900 via-slate-950 to-black text-white">
      <h2 className="text-4xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight tracking-tight w-full text-pretty">
        Clips Destacados
      </h2>
      <div className="flex justify-center mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("recent")}
          className={`px-6 py-2 rounded-l-lg font-semibold transition-colors cursor-pointer w-lg border border-purple-900/50 ${
            activeTab === "recent"
              ? "bg-slate-700 text-white"
              : "bg-slate-900 text-gray-500"
          }`}
          aria-pressed={activeTab === "recent"}>
          Recientes
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("popular")}
          className={`bg-gradient-to-r from-slate-800 to-gray-900 px-6 py-2 rounded-r-lg font-semibold transition-colors cursor-pointer w-lg ${
            activeTab === "popular"
              ? "bg-slate-700 text-white "
              : "bg-slate-900 text-gray-500"
          }`}
          aria-pressed={activeTab === "popular"}>
          Populares
        </button>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {clipsToShow.map((clip) => (
          <div
            key={clip.id}
            className="w-96 h-60 mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src={clip.embedUrl}
              title={clip.title}
              allowFullScreen
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="https://www.twitch.tv/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500 text-purple-400 hover:bg-purple-400 hover:border-white hover:text-white transition duration-300">
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            viewBox="0 0 2400 2800">
            <path
              fill="#fff"
              d="m2200 1300-400 400h-400l-350 350v-350H600V200h1600z"
            />
            <g fill="#9146ff">
              <path d="M500 0 0 500v1800h600v500l500-500h400l900-900V0H500zm1700 1300-400 400h-400l-350 350v-350H600V200h1600v1100z" />
              <path d="M1700 550h200v600h-200zm-550 0h200v600h-200z" />
            </g>
          </svg>
          Ver más en Twitch
        </a>
      </div>
    </section>
  );
}
