import Section from "./Section";
import { experience } from "../data";

const accent = ["bg-pink", "bg-blue", "bg-coral", "bg-leaf"];

export default function Experience() {
  return (
    <Section
      id="experience"
      label="work"
      title="What I've worked on."
      kicker="Two years at DeltaX, on Birdigo — a CRM running on ASP.NET Core, SQL Server, Redis, and Kubernetes."
      alt
    >
      <div className="space-y-8">
        {experience.map((job, i) => (
          <article
            key={i}
            className="brutal bg-paper rounded-xl p-6 pt-10 sm:p-8 sm:pt-10 relative"
          >
            <div
              className={`absolute -top-4 left-4 sm:-left-4 w-11 h-11 ${accent[i % accent.length]} border-2 border-ink rounded-full grid place-items-center font-sans font-extrabold text-paper text-base shadow-chunkSm`}
              aria-hidden
            >
              {i + 1}
            </div>

            <header className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl sm:text-2xl text-ink font-sans font-extrabold">
                {job.role}{" "}
                <span className="text-mute font-bold">@ {job.company}</span>
              </h3>
              <span className="px-3 py-1 bg-ink text-bg text-xs sm:text-sm font-bold rounded-md whitespace-nowrap">
                {job.period}
              </span>
            </header>
            <p className="text-mute text-sm mt-1">{job.location}</p>
            {job.blurb && (
              <p className="mt-5 text-ink2 italic text-lg">{job.blurb}</p>
            )}
            <ul className="mt-5 space-y-3">
              {job.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-ink2 leading-relaxed">
                  <span className="text-pink mt-1.5 shrink-0">●</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {job.tags && (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                {job.tags.map((t) => (
                  <li
                    key={t}
                    className="text-xs font-semibold px-2.5 py-1 bg-bg border-2 border-ink rounded-md"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
