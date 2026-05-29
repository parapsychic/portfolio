import { profile, nowDoing } from "../data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 lg:min-h-screen flex items-center"
    >
      <div aria-hidden className="absolute inset-0 dots opacity-25 pointer-events-none" />

      {/* desktop-only decorative shapes, 5 morpher colors */}
      <div aria-hidden className="hidden lg:block absolute top-28 right-12 w-16 h-16 bg-pink border-2 border-ink rounded-full shadow-chunk animate-bob" />
      <div aria-hidden className="hidden lg:block absolute bottom-32 left-10 w-14 h-14 bg-blue border-2 border-ink shadow-chunk animate-bob" style={{ animationDelay: "-2s" }} />
      <div aria-hidden className="hidden lg:block absolute top-44 left-1/3 w-9 h-9 bg-lime border-2 border-ink rotate-12 shadow-chunkSm" />
      <div aria-hidden className="hidden lg:block absolute bottom-20 right-1/3 w-10 h-10 bg-coral border-2 border-ink rounded-md shadow-chunkSm rotate-[-8deg]" />

      {/* subtle comet streak, kimi no na wa nod */}
      <svg
        aria-hidden
        className="hidden md:block absolute top-20 right-1/4 w-40 h-12 opacity-70"
        viewBox="0 0 160 40"
        fill="none"
      >
        <defs>
          <linearGradient id="comet" x1="0" x2="1">
            <stop offset="0%" stopColor="#FF3D7F" stopOpacity="0" />
            <stop offset="100%" stopColor="#FF3D7F" />
          </linearGradient>
        </defs>
        <path d="M2 30 Q 70 28, 140 8" stroke="url(#comet)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="142" cy="8" r="4" fill="#FF3D7F" stroke="#0E0E10" strokeWidth="2" />
      </svg>

      <div className="relative max-w-6xl w-full mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's connect")}&body=${encodeURIComponent("Hi Febin,\n\nSaw your portfolio and would love to chat about a role we're hiring for.\n\n")}`}
            className="sticker bg-paper mb-6 inline-flex hover:bg-lime transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-lime border border-ink" />
            open to new roles
          </a>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold leading-[0.95] text-ink break-words">
            hi, i'm{" "}
            <span className="inline-block scribble">Febin</span>.
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-ink2 max-w-xl leading-snug">
            {profile.oneLiner}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-3 bg-ink text-bg border-2 border-ink rounded-md font-semibold shadow-chunk hover:bg-pink hover:text-paper transition-colors"
            >
              say hi →
            </a>
            <a
              href="#projects"
              className="px-5 py-3 bg-paper border-2 border-ink rounded-md font-semibold shadow-chunk hover:bg-lime transition-colors"
            >
              what i've made
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 underline underline-offset-4 decoration-2 font-semibold hover:text-pink"
            >
              github ↗
            </a>
          </div>
        </div>

        <aside className="lg:col-span-5 relative">
          <div className="brutal rounded-xl p-6 relative">
            <span className="tape" aria-hidden />
            <p className="text-xs uppercase tracking-widest text-mute mb-4 font-bold">
              where I am right now
            </p>
            <ul className="space-y-3">
              {nowDoing.map((r) => (
                <li
                  key={r.label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 border-b border-dashed border-ink/15 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-xs uppercase tracking-wider font-bold text-mute sm:w-20 shrink-0">
                    {r.label}
                  </span>
                  <span className="text-ink font-semibold leading-snug">{r.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
