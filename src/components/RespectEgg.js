import { useEffect, useRef, useState } from "react";

const MAX = 25;

function synthAlert() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    const tones = [
      { f: 880, t: now, d: 0.12 },
      { f: 1320, t: now + 0.14, d: 0.18 },
      { f: 660, t: now + 0.36, d: 0.22 },
    ];
    tones.forEach(({ f, t, d }) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "square";
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.35, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(ctx.destination);
      o.start(t);
      o.stop(t + d + 0.05);
    });
  } catch {
    /* no audio context, oh well */
  }
}

function playSalute() {
  try {
    const a = new Audio("/sounds/salute.mp3");
    a.volume = 0.85;
    a.play().catch(() => synthAlert());
  } catch {
    synthAlert();
  }
}

export default function RespectEgg() {
  const [count, setCount] = useState(0);
  const [pops, setPops] = useState([]);
  const [maxed, setMaxed] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    const bump = () => {
      if (doneRef.current) return;

      window.dispatchEvent(new CustomEvent("respect-tick"));

      const id = Math.random().toString(36).slice(2);
      const x = 70 + Math.random() * 80;
      const y = 64 + Math.random() * 40;
      setPops((p) => [...p, { id, x, y }]);
      setTimeout(() => setPops((p) => p.filter((q) => q.id !== id)), 1100);

      setCount((c) => {
        const next = c + 1;
        if (next >= MAX && !doneRef.current) {
          doneRef.current = true;
          setMaxed(true);
          playSalute();
          setTimeout(() => setMaxed(false), 13000);
        }
        return next;
      });
    };

    const onKey = (e) => {
      if (doneRef.current) return;
      const tag = (e.target?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target?.isContentEditable) return;
      if (e.key !== "f" && e.key !== "F") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      e.preventDefault();
      bump();
    };

    const onPress = () => bump();

    window.addEventListener("keydown", onKey);
    window.addEventListener("respect-press", onPress);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("respect-press", onPress);
    };
  }, []);

  const pct = Math.min(100, (count / MAX) * 100);

  return (
    <>
      {/* floating "+1 RESPECT" damage numbers */}
      <div className="fixed inset-0 pointer-events-none z-[60]">
        {pops.map((p) => (
          <span
            key={p.id}
            className="absolute font-pixel text-pink text-base sm:text-lg"
            style={{
              left: p.x,
              top: p.y,
              textShadow: "2px 2px 0 #0E0E10",
              animation: "respect-pop 1.1s ease-out forwards",
            }}
          >
            +1 RESPECT
          </span>
        ))}
      </div>

      {/* meter (no counter text — figure it out) */}
      {count > 0 && !maxed && !doneRef.current && (
        <div
          className="fixed bottom-5 right-5 z-[60] bg-paper rounded-md p-3 w-52"
          style={{ border: "2px solid #0E0E10", boxShadow: "4px 4px 0 0 #0E0E10" }}
          aria-label="respect meter"
        >
          <div className="h-3 bg-bg border-2 border-ink overflow-hidden">
            <div
              className="h-full bg-pink transition-all duration-200"
              style={{ width: pct + "%" }}
            />
          </div>
        </div>
      )}

      {/* MAX: full-page snake.jpg */}
      {maxed && (
        <div
          className="fixed inset-0 z-[100] bg-black"
          role="dialog"
          aria-label="Snake salutes"
        >
          <img
            src="/snake.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ animation: "salute-zoom 0.5s ease-out both" }}
          />
        </div>
      )}
    </>
  );
}
