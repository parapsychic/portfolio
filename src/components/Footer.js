import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-bg">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <p className="font-semibold">
          © {new Date().getFullYear()} {profile.name}. Brick by Brick.
        </p>
        <p className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-pink underline decoration-2 underline-offset-4">github</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-pink underline decoration-2 underline-offset-4">linkedin</a>
          <a href={`mailto:${profile.email}`} className="hover:text-pink underline decoration-2 underline-offset-4">email</a>
        </p>
      </div>
    </footer>
  );
}
