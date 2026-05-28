import Section from "./Section";
import { projects } from "../data";

const tilts = ["sm:rotate-[-1deg]", "sm:rotate-[1.5deg]"];
const tones = ["bg-sky", "bg-violet"];

export default function Projects() {
  return (
    <Section
      id="projects"
      label="stuff i made"
      title="Side projects."
      kicker="One ships on a Navy aircraft carrier. The other lives in VSCode."
      alt
    >
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className={`brutal ${tones[i % tones.length]} rounded-xl p-6 flex flex-col ${tilts[i % tilts.length]}`}
          >
            <header className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-xl text-ink font-sans font-extrabold leading-tight">
                  {p.name}
                </h3>
                <p className="text-xs text-ink2 mt-1 font-semibold uppercase tracking-wider">
                  {p.org}
                </p>
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.name}`}
                className="w-10 h-10 grid place-items-center bg-paper border-2 border-ink rounded-md shadow-chunkSm hover:bg-pink hover:text-paper"
              >
                ↗
              </a>
            </header>

            <p className="mt-4 text-ink2 leading-relaxed">{p.description}</p>

            {p.highlight && (
              <p className="mt-3 inline-flex w-fit px-2 py-1 bg-paper border-2 border-ink rounded text-sm font-bold">
                ★ {p.highlight}
              </p>
            )}

            <ul className="mt-5 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="text-xs font-semibold px-2.5 py-1 bg-paper border-2 border-ink rounded-md"
                >
                  {s}
                </li>
              ))}
            </ul>

            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 underline underline-offset-4 decoration-2 font-bold w-fit hover:text-pink"
            >
              {p.linkLabel} →
            </a>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center text-mute">
        more on{" "}
        <a
          href="https://github.com/parapsychic"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-2 underline-offset-4 font-bold text-ink hover:text-pink"
        >
          github
        </a>
        .
      </p>
    </Section>
  );
}
