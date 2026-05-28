import Section from "./Section";
import { skills } from "../data";

const tones = ["bg-pink", "bg-blue", "bg-coral", "bg-sky", "bg-violet"];
const pillTones = ["bg-paper", "bg-bg", "bg-paper", "bg-bg", "bg-paper"];

export default function Skills() {
  return (
    <Section
      id="skills"
      label="stack"
      title="What I work with."
      kicker="Day-job stuff up top. Weekend stuff at the bottom."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group, i) => (
          <article
            key={group.group}
            className={`brutal rounded-xl p-6 ${pillTones[i % pillTones.length]}`}
          >
            <header className="flex items-center gap-3 mb-4">
              <span
                className={`w-6 h-6 ${tones[i % tones.length]} border-2 border-ink rounded`}
                aria-hidden
              />
              <h3 className="text-xl font-sans font-extrabold text-ink">
                {group.group}
              </h3>
            </header>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm font-semibold px-3 py-1.5 bg-paper border-2 border-ink rounded-md hover:bg-lime transition-colors cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
