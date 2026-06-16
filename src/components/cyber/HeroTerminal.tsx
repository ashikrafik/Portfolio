import { useEffect, useRef, useState } from "react";

interface Step {
  cmd: string;
  out: string[];
  status?: "ok" | "warn";
}

const SCRIPT: Step[] = [
  { cmd: "nmap -sV target.local", out: ["Discovering open ports...", "22/tcp  open  ssh   OpenSSH 9.3", "80/tcp  open  http  nginx 1.27", "443/tcp open  ssl   TLSv1.3"], status: "ok" },
  { cmd: "burpsuite --intercept", out: ["Analyzing HTTP traffic...", "→ captured 142 requests", "→ flagged 3 anomalies (XSS, IDOR)"], status: "warn" },
  { cmd: "hydra -l admin -P rockyou.txt ssh://10.0.0.5", out: ["Bruteforce in progress...", "[ATTEMPT] target=10.0.0.5  login=admin", "[ABORTED] rate-limit policy engaged"], status: "warn" },
  { cmd: "status --check", out: ["System Secure. Defenses Operational.", "SIEM stream: 12,408 events/sec", "Threats neutralized: 7"], status: "ok" },
];

export function HeroTerminal() {
  const [stepIdx, setStepIdx] = useState(0);
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<"typing" | "output" | "pause">("typing");
  const [outLines, setOutLines] = useState<string[]>([]);
  const [history, setHistory] = useState<{ cmd: string; out: string[]; status?: string }[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const step = SCRIPT[stepIdx];
    if (phase === "typing") {
      if (typed.length < step.cmd.length) {
        const t = setTimeout(() => setTyped(step.cmd.slice(0, typed.length + 1)), 38);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("output"), 280);
      return () => clearTimeout(t);
    }
    if (phase === "output") {
      if (outLines.length < step.out.length) {
        const t = setTimeout(() => setOutLines(step.out.slice(0, outLines.length + 1)), 260);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pause"), 900);
      return () => clearTimeout(t);
    }
    // pause -> next
    const t = setTimeout(() => {
      setHistory((h) => [...h.slice(-2), { cmd: step.cmd, out: step.out, status: step.status }]);
      setTyped(""); setOutLines([]);
      setStepIdx((i) => (i + 1) % SCRIPT.length);
      setPhase("typing");
    }, 800);
    return () => clearTimeout(t);
  }, [phase, typed, outLines, stepIdx]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [outLines, history]);

  return (
    <div className="cyber-card corner-brackets relative overflow-hidden scanlines">
      <div className="flex items-center justify-between border-b border-border/60 bg-surface/60 px-4 py-2.5 font-mono-cyber text-[11px]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-cyber-red/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyber-amber/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyber-green/80 shadow-cyber-green" />
          <span className="ml-3 text-muted-foreground">root@ashik-recon:~</span>
        </div>
        <span className="text-cyber-cyan">SECURE</span>
      </div>
      <div ref={scrollRef} className="h-[340px] overflow-y-auto px-4 py-4 font-mono-cyber text-[13px] leading-relaxed">
        {history.map((h, i) => (
          <div key={i} className="mb-3 opacity-60">
            <div><span className="text-cyber-green">[~]</span> <span className="text-cyber-cyan">$</span> {h.cmd}</div>
            {h.out.map((o, j) => (
              <div key={j} className="pl-5 text-foreground/70">{o}</div>
            ))}
          </div>
        ))}
        <div>
          <div>
            <span className="text-cyber-green">[~]</span> <span className="text-cyber-cyan">$</span>{" "}
            <span className="text-foreground">{typed}</span>
            {phase === "typing" && <span className="animate-blink text-cyber-cyan">▌</span>}
          </div>
          {outLines.map((o, j) => (
            <div key={j} className="animate-fade-up pl-5 text-foreground/80">
              <span className="text-cyber-cyan">›</span> {o}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
