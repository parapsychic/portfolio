export default function Section({ id, label, title, children, kicker, alt }) {
  return (
    <section
      id={id}
      className={`py-24 scroll-mt-20 ${alt ? "bg-bgAlt" : ""} border-t-2 border-ink`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="inline-block px-3 py-1 bg-ink text-bg text-xs font-bold uppercase tracking-widest rounded-md mb-3">
              {label}
            </span>
            <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-ink tracking-tight">
              {title}
            </h2>
            {kicker && (
              <p className="mt-4 text-ink2 max-w-2xl text-lg">{kicker}</p>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
