import Section from "./Section";
import { profile } from "../data";

const channels = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}`, tone: "bg-pink" },
  { label: "github", value: "github.com/parapsychic", href: profile.github, tone: "bg-blue" },
  { label: "linkedin", value: "linkedin.com/in/febinkdominic", href: profile.linkedin, tone: "bg-coral" },
  { label: "sh*tposting", value: "parapsychic.net", href: "https://parapsychic.net", tone: "bg-lime" },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      label="say hi"
      title="Get in touch."
      kicker="Happy to chat about work, collaboration, or anything in between."
    >
      <div className="brutal bg-paper rounded-2xl p-8 sm:p-12">
        <p className="text-lg sm:text-xl text-ink2 mb-8 leading-relaxed">
          Pick whichever channel works for you. I check them all, but email is fastest.
        </p>

        <ul className="grid sm:grid-cols-2 gap-4">
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 p-4 border-2 border-ink rounded-xl bg-bg hover:bg-ink hover:text-bg transition-colors"
              >
                <span
                  className={`w-10 h-10 ${c.tone} border-2 border-ink rounded-md shadow-chunkSm shrink-0`}
                  aria-hidden
                />
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-widest font-bold text-mute group-hover:text-bg">
                    {c.label}
                  </span>
                  <span className="block font-semibold truncate">{c.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}?subject=Hi%20Febin`}
            className="px-5 py-3 bg-ink text-bg border-2 border-ink rounded-md font-semibold shadow-chunk hover:bg-pink hover:text-paper transition-colors"
          >
            email me
          </a>
          <a
            href="/Febin_K_Dominic_Resume.pdf"
            className="px-5 py-3 bg-bg border-2 border-ink rounded-md font-semibold shadow-chunk hover:bg-lime transition-colors"
          >
            grab my résumé
          </a>
        </div>
      </div>
    </Section>
  );
}
