import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "work" },
  { href: "#skills", label: "stack" },
  { href: "#projects", label: "stuff i made" },
  { href: "#contact", label: "say hi" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const logoRef = useRef(null);
  const fBadgeRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onTick = () => {
      const el = fBadgeRef.current;
      if (!el) return;
      el.style.animation = "none";
      // force reflow so animation restarts
      void el.offsetWidth;
      el.style.animation = "respect-wiggle 0.45s ease";
    };
    window.addEventListener("respect-tick", onTick);
    return () => window.removeEventListener("respect-tick", onTick);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-bg/95 backdrop-blur-sm border-b-2 border-ink" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          ref={logoRef}
          onClick={() => window.dispatchEvent(new CustomEvent("respect-press"))}
          className="flex items-center gap-2 group"
        >
          <span
            ref={fBadgeRef}
            className="w-8 h-8 grid place-items-center bg-pink text-paper border-2 border-ink rounded-md shadow-chunkSm font-sans font-extrabold group-hover:rotate-[-6deg] transition-transform"
          >
            F
          </span>
          <span className="font-sans font-extrabold text-ink text-lg tracking-tight hidden sm:inline">
            febin.
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 text-sm font-semibold">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-md hover:bg-ink hover:text-bg transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Febin_K_Dominic_Resume.pdf"
              className="ml-2 px-3 py-1.5 bg-ink text-bg rounded-md border-2 border-ink hover:bg-pink hover:text-paper transition-colors shadow-chunkSm"
            >
              résumé ↗
            </a>
          </li>
        </ul>

        <button
          className="md:hidden p-2 bg-paper border-2 border-ink rounded-md shadow-chunkSm"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-ink mb-1" />
          <span className="block w-5 h-0.5 bg-ink mb-1" />
          <span className="block w-5 h-0.5 bg-ink" />
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t-2 border-ink bg-bg px-5 py-4 text-base font-semibold space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="block py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Febin_K_Dominic_Resume.pdf"
              className="inline-block mt-2 px-3 py-1.5 bg-ink text-bg rounded-md shadow-chunkSm"
            >
              résumé ↗
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
