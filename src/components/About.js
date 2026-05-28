import Section from "./Section";
import { profile, education, focusAreas } from "../data";

export default function About() {
  return (
    <Section id="about" label="about" title="A bit about me.">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-5 text-ink2 leading-relaxed text-lg">
          <p>{profile.bio}</p>
          <p>
            I lean backend, but I'm comfortable jumping into the frontend or
            mobile side when a feature needs it — most of the things I've
            shipped touched more than one part of the stack.
          </p>
          <p>
            Outside of work, I'm usually playing a game, catching up on a
            show, or tinkering with my Arch setup. Nothing fancy.
          </p>

          <div className="pt-4">
            <p className="text-sm uppercase tracking-widest font-bold text-mute mb-3">
              areas I've spent time in
            </p>
            <ul className="flex flex-wrap gap-2">
              {focusAreas.map((f) => (
                <li
                  key={f}
                  className="text-sm font-semibold px-3 py-1.5 bg-paper border-2 border-ink rounded-md"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="brutal bg-paper rounded-xl p-6 h-fit lg:rotate-[1deg]">
          <p className="text-xs uppercase tracking-widest text-mute font-bold mb-3">
            school
          </p>
          <p className="text-ink font-bold text-lg leading-tight">{education.school}</p>
          <p className="text-mute text-sm mt-1">{education.degree}</p>
          <div className="mt-5 flex items-center justify-between gap-3 flex-wrap">
            <span className="text-mute text-sm">{education.period}</span>
            <span className="px-2 py-1 bg-lime border-2 border-ink rounded text-sm font-bold whitespace-nowrap">
              {education.cgpa}
            </span>
          </div>
        </aside>
      </div>
    </Section>
  );
}
