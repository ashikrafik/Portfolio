import { useEffect, useState } from "react";

interface Props { onDone: () => void }

const LINES = [
  "[boot] initializing secure shell .........",
  "[net]  handshake: TLSv1.3 :: ECDHE-RSA-AES256-GCM-SHA384",
  "[auth] verifying biometric signature ......... ✓",
  "[sys]  loading tactical interface modules ......... ✓",
  "[ok]   LOGGING IN AS AUTHORIZED USER ......... GRANTED",
];

export function BootLoader({ onDone }: Props) {
  const [shown, setShown] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setShown(LINES.slice(0, i));
      if (i >= LINES.length) {
        clearInterval(t);
        setTimeout(() => {
          setDone(true);
          setTimeout(onDone, 600);
        }, 350);
      }
    }, 280);
    return () => clearInterval(t);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${done ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <div className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.82 0.18 200 / 0.08) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82 0.18 200 / 0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative w-[min(640px,92vw)] cyber-card corner-brackets p-6 font-mono-cyber">
        <div className="mb-4 flex items-center justify-between text-xs">
          <span className="text-cyber-cyan">// secure-terminal :: v13.7.2</span>
          <span className="flex items-center gap-1.5 text-cyber-green">
            <span className="h-2 w-2 rounded-full bg-cyber-green shadow-cyber-green animate-glow-pulse" />
            ONLINE
          </span>
        </div>
        <div className="space-y-1.5 text-[13px] leading-relaxed text-foreground/90">
          {shown.map((l, i) => (
            <div key={i} className="animate-fade-up">
              <span className="text-cyber-cyan">$</span> {l}
            </div>
          ))}
          <div className="text-cyber-green">
            <span className="animate-blink">▌</span>
          </div>
        </div>
      </div>
    </div>
  );
}
